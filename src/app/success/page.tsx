'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [visible, setVisible] = useState(false)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Verifica il pagamento con Stripe e salva l'acquisto nel DB
  useEffect(() => {
    if (!sessionId || verified) return
    fetch('/api/checkout/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setVerified(true)
        else console.error('Verify failed:', data.error)
      })
      .catch(err => console.error('Verify error:', err))
  }, [sessionId, verified])

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow background */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,245,212,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        textAlign: 'center',
        maxWidth: '560px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
        transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Success icon */}
        <div style={{
          width: '100px', height: '100px',
          margin: '0 auto 2rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,245,212,0.2), rgba(157,78,221,0.2))',
          border: '2px solid rgba(0,245,212,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          boxShadow: '0 0 60px rgba(0,245,212,0.3)',
        }}>
          💊
        </div>

        <div style={{
          display: 'inline-block',
          border: '1px solid rgba(0,245,212,0.3)',
          borderRadius: '100px',
          padding: '0.3rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          color: '#00f5d4',
          backgroundColor: 'rgba(0,245,212,0.08)',
        }}>
          ✓ PAYMENT CONFIRMED
        </div>

        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: '#f0f0ff',
          margin: '0 0 1rem 0',
          lineHeight: 1.15,
        }}>
          YOUR DOSE HAS BEEN<br />
          <span style={{
            background: 'linear-gradient(135deg, #00f5d4, #9d4edd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ADMINISTERED
          </span>
        </h1>

        <p style={{
          color: '#8888aa',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}>
          Your digital substance is now available in your stash.<br />
          Apply the system prompt to your AI and experience the altered state.
        </p>

        {sessionId && (
          <p style={{
            color: '#2a2a3d',
            fontSize: '0.65rem',
            fontFamily: 'monospace',
            marginBottom: '2rem',
          }}>
            Order ref: {sessionId.slice(-12)}
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
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
              boxShadow: '0 0 30px rgba(157,78,221,0.4)',
            }}>
              GO TO MY STASH →
            </button>
          </Link>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              border: '1px solid #2a2a3d',
              color: '#8888aa',
              padding: '0.875rem 2rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9d4edd'; (e.currentTarget as HTMLElement).style.color = '#f0f0ff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a3d'; (e.currentTarget as HTMLElement).style.color = '#8888aa' }}
            >
              SHOP MORE ⚗️
            </button>
          </Link>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '1.25rem 1.5rem',
          backgroundColor: '#12121a',
          borderRadius: '10px',
          border: '1px solid #2a2a3d',
          textAlign: 'left',
        }}>
          <p style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: '#8888aa',
            marginBottom: '0.75rem',
          }}>
            ◆ QUICK START
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Go to My Stash and copy your prompt', 'Open ChatGPT, Claude, or any AI', 'Paste as System Prompt and save', 'Start chatting — enjoy the altered state'].map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#8888aa' }}>
                <span style={{ color: '#9d4edd', fontWeight: 700, minWidth: '1.2rem' }}>{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#8888aa' }}>Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
