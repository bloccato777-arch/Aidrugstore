'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { GlowButton } from './GlowButton'

interface BuyButtonProps {
  productSlug: string
  price?: number
}

export function BuyButton({ productSlug, price }: BuyButtonProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    if (status === 'loading') return

    if (!session) {
      router.push(`/login?callbackUrl=/product/${productSlug}`)
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productSlug }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error ?? 'Checkout failed')
      }

      const { url } = await res.json()
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      toast.error(message)
      setLoading(false)
    }
  }

  return (
    <GlowButton
      variant="primary"
      size="lg"
      loading={loading}
      onClick={handleBuy}
      style={{ width: '100%', justifyContent: 'center' }}
    >
      {!session && status !== 'loading'
        ? '🔒 SIGN IN TO PURCHASE'
        : `💊 ADMINISTER THIS DOSE${price ? ` — €${price.toFixed(2)}` : ''}`}
    </GlowButton>
  )
}
