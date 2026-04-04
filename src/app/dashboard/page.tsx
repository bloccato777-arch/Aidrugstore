'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { usePurchases } from '@/hooks/usePurchases'
import { Copy, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { purchases, isLoading } = usePurchases()
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/dashboard')
    }
  }, [status, router])

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#8888aa', fontSize: '0.9rem' }}>Loading...</div>
      </div>
    )
  }

  function copyPrompt(text: string, name: string) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${name} prompt copied to clipboard!`)
    })
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid #2a2a3d',
        backgroundColor: '#12121a',
        padding: '3rem 1.5rem 2rem',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#9d4edd', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            👤 {session?.user?.email}
          </p>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#f0f0ff',
            margin: 0,
            letterSpacing: '0.04em',
          }}>
            MY STASH
          </h1>
          {!isLoading && (
            <p style={{ color: '#8888aa', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              {purchases.length} substance{purchases.length !== 1 ? 's' : ''} in your collection
            </p>
          )}
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {isLoading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                height: '100px',
                backgroundColor: '#1a1a28',
                borderRadius: '12px',
                border: '1px solid #2a2a3d',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
            ))}
          </div>
        ) : purchases.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '6rem 2rem',
            backgroundColor: '#1a1a28',
            borderRadius: '16px',
            border: '1px solid #2a2a3d',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🧪</div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              color: '#f0f0ff',
              marginBottom: '0.75rem',
              fontSize: '1.5rem',
            }}>
              Your stash is empty
            </h2>
            <p style={{ color: '#8888aa', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Head to the lab and acquire your first digital substance.
            </p>
            <Link href="/products" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                border: 'none',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <ShoppingBag size={16} />
                ENTER THE LAB
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {purchases.map((purchase: {
              id: string
              createdAt: string
              product: {
                id: string
                slug: string
                name: string
                emoji: string
                color: string
                colorSecond: string
                category: string
                dosage: string
                fullPrompt: string
              }
            }) => (
              <div
                key={purchase.id}
                style={{
                  backgroundColor: '#1a1a28',
                  border: `1px solid ${purchase.product.color}33`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, #1a1a28 0%, ${purchase.product.color}0a 100%)`,
                }}
              >
                {/* Card Header */}
                <div style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{purchase.product.emoji}</span>
                    <div>
                      <h3 style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: '#f0f0ff',
                        margin: '0 0 0.2rem 0',
                      }}>
                        {purchase.product.name}
                      </h3>
                      <p style={{ color: '#8888aa', fontSize: '0.75rem', margin: 0 }}>
                        Acquired {formatDate(purchase.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <button
                      onClick={() => copyPrompt(purchase.product.fullPrompt, purchase.product.name)}
                      style={{
                        background: 'transparent',
                        border: `1px solid ${purchase.product.color}66`,
                        color: purchase.product.color,
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.15s',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Copy size={12} />
                      COPY
                    </button>
                    <button
                      onClick={() => setExpanded(expanded === purchase.id ? null : purchase.id)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #2a2a3d',
                        color: '#8888aa',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.15s',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {expanded === purchase.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      {expanded === purchase.id ? 'HIDE' : 'VIEW PROMPT'}
                    </button>
                  </div>
                </div>

                {/* Prompt Content */}
                {expanded === purchase.id && (
                  <div style={{
                    borderTop: `1px solid ${purchase.product.color}22`,
                    padding: '1.5rem',
                    backgroundColor: '#12121a',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <span style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        color: '#8888aa',
                      }}>
                        ◆ FULL SYSTEM PROMPT
                      </span>
                      <button
                        onClick={() => copyPrompt(purchase.product.fullPrompt, purchase.product.name)}
                        style={{
                          background: `${purchase.product.color}22`,
                          border: `1px solid ${purchase.product.color}66`,
                          color: purchase.product.color,
                          padding: '0.35rem 0.875rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          letterSpacing: '0.04em',
                          fontWeight: 600,
                        }}
                      >
                        <Copy size={12} />
                        COPY PROMPT
                      </button>
                    </div>
                    <pre style={{
                      color: '#8888aa',
                      fontSize: '0.82rem',
                      lineHeight: 1.7,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      margin: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      padding: '1rem',
                      backgroundColor: '#0a0a0f',
                      borderRadius: '8px',
                      border: '1px solid #2a2a3d',
                      maxHeight: '400px',
                      overflowY: 'auto',
                    }}>
                      {purchase.product.fullPrompt}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
