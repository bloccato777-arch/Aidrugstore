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

    const { productSlug } = await request.json()

    const product = await prisma.product.findUnique({
      where: { slug: productSlug, active: true },
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Upsert: se l'utente non esiste nel DB lo crea al volo
    const user = await prisma.user.upsert({
      where: { email: session.user.email },
      update: {},
      create: {
        email: session.user.email,
        name: session.user.name ?? session.user.email.split('@')[0],
      },
    })

    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: user.id,
        productId: product.id,
        status: 'completed',
      },
    })

    if (existingPurchase) {
      return NextResponse.json({ error: 'Already purchased' }, { status: 400 })
    }

    // Valida email prima di passarla a Stripe
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validEmail = emailRegex.test(session.user.email) ? session.user.email : undefined

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${product.emoji} ${product.name}`,
              description: product.tagline,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        productId: product.id,
        userId: user.id,
      },
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/product/${productSlug}`,
      ...(validEmail ? { customer_email: validEmail } : {}),
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
