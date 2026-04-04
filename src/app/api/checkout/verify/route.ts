import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { sessionId } = await request.json()

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session ID' }, { status: 400 })
    }

    // Verifica il pagamento direttamente con Stripe
    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId)

    if (stripeSession.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 })
    }

    const productId = stripeSession.metadata?.productId
    const userId = stripeSession.metadata?.userId

    if (!productId || !userId) {
      return NextResponse.json({ error: 'Missing metadata' }, { status: 400 })
    }

    // Controlla se l'acquisto esiste già (evita duplicati)
    const existing = await prisma.purchase.findFirst({
      where: { stripeSessionId: sessionId },
    })

    if (existing) {
      // Già registrato — restituisci successo senza creare duplicato
      return NextResponse.json({ success: true, alreadyExists: true })
    }

    // Crea il record di acquisto
    await prisma.purchase.create({
      data: {
        userId,
        productId,
        stripeSessionId: sessionId,
        amount: (stripeSession.amount_total ?? 0) / 100,
        currency: stripeSession.currency ?? 'eur',
        status: 'completed',
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
