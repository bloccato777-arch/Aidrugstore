'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type CookieConsent = 'accepted' | 'rejected' | null

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null)
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent') as CookieConsent
    if (!stored) {
      // Mostra il banner dopo 800ms (evita flash on load)
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    } else {
      setConsent(stored)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible || consent !== null) return null

  return (
    <>
      {/* Backdrop blur leggero */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          backgroundColor: '#1a1a28',
          border: '1px solid #2a2a3d',
          borderRadius: '16px',
          padding: '1.5rem',
          maxWidth: '680px',
          width: '100%',
          boxShadow: '0 -4px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(157,78,221,0.1)',
          pointerEvents: 'all',
          animation: 'slideUp 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>🍪</span>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#f0f0ff',
                margin: 0,
                letterSpacing: '0.04em',
              }}>
                Cookie Preferences
              </h3>
            </div>
            <span style={{
              fontSize: '0.65rem',
              color: '#9d4edd',
              border: '1px solid rgba(157,78,221,0.3)',
              borderRadius: '4px',
              padding: '0.15rem 0.4rem',
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}>
              GDPR
            </span>
          </div>

          {/* Text */}
          <p style={{ color: '#8888aa', fontSize: '0.82rem', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
            We use essential cookies to keep you logged in and process payments securely. With your consent, we also use analytics cookies to improve the experience.{' '}
            <Link href="/privacy" style={{ color: '#9d4edd', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </p>

          {/* Details toggle */}
          {showDetails && (
            <div style={{
              backgroundColor: '#12121a',
              border: '1px solid #2a2a3d',
              borderRadius: '8px',
              padding: '0.875rem 1rem',
              marginBottom: '1rem',
              fontSize: '0.78rem',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <CookieRow
                  name="Essential cookies"
                  desc="Authentication session, Stripe fraud prevention. Cannot be disabled."
                  always
                />
                <CookieRow
                  name="Analytics cookies"
                  desc="Anonymous usage statistics to understand how the Service is used."
                  always={false}
                />
              </div>
            </div>
          )}

          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: 'none',
              border: 'none',
              color: '#8888aa',
              fontSize: '0.75rem',
              cursor: 'pointer',
              padding: '0 0 0.75rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            {showDetails ? '▲' : '▼'} {showDetails ? 'Hide details' : 'Show cookie details'}
          </button>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={accept}
              style={{
                flex: 1,
                minWidth: '120px',
                background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                border: 'none',
                color: '#fff',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                boxShadow: '0 0 16px rgba(157,78,221,0.3)',
              }}
            >
              Accept All
            </button>
            <button
              onClick={reject}
              style={{
                flex: 1,
                minWidth: '120px',
                background: 'transparent',
                border: '1px solid #2a2a3d',
                color: '#8888aa',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#8888aa' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a3d' }}
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

function CookieRow({ name, desc, always }: { name: string; desc: string; always: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
      <div>
        <p style={{ color: '#f0f0ff', margin: '0 0 0.2rem 0', fontWeight: 600, fontSize: '0.8rem' }}>{name}</p>
        <p style={{ color: '#8888aa', margin: 0, fontSize: '0.75rem', lineHeight: 1.5 }}>{desc}</p>
      </div>
      <div style={{
        flexShrink: 0,
        padding: '0.2rem 0.6rem',
        borderRadius: '100px',
        fontSize: '0.65rem',
        letterSpacing: '0.06em',
        backgroundColor: always ? 'rgba(0,245,212,0.1)' : 'rgba(157,78,221,0.1)',
        color: always ? '#00f5d4' : '#9d4edd',
        border: `1px solid ${always ? 'rgba(0,245,212,0.3)' : 'rgba(157,78,221,0.3)'}`,
      }}>
        {always ? 'ALWAYS ON' : 'OPTIONAL'}
      </div>
    </div>
  )
}
