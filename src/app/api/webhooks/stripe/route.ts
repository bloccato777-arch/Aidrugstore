import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import type Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      await prisma.purchase.create({
        data: {
          userId: session.metadata!.userId,
          productId: session.metadata!.productId,
          stripeSessionId: session.id,
          amount: (session.amount_total ?? 0) / 100,
          currency: session.currency ?? 'eur',
          status: 'completed',
        },
      })
    } catch (err) {
      console.error('Failed to create purchase:', err)
      return NextResponse.json({ error: 'Failed to process payment' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}
