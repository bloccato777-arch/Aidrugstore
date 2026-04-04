'use client'
import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FlaskConical } from 'lucide-react'
import { Suspense } from 'react'

function LoginContent() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard'

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, router, callbackUrl])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    const res = await signIn('credentials', {
      email: email.trim(),
      redirect: false,
      callbackUrl,
    })

    if (res?.ok) {
      router.push(callbackUrl)
    } else if (res?.error) {
      setError('Sign in failed. Please try again.')
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#8888aa' }}>Loading...</div>
      </div>
    )
  }

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
      {/* BG glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(157,78,221,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: '420px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <FlaskConical size={28} color="#9d4edd" />
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 900,
              fontSize: '1.4rem',
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #9d4edd, #ff006e, #00f5d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI DRUGSTORE
            </span>
          </div>
          <p style={{ color: '#8888aa', fontSize: '0.85rem' }}>
            Sign in to access your stash
          </p>
        </div>

        {/* Card */}
        <div style={{
          backgroundColor: '#1a1a28',
          border: '1px solid #2a2a3d',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(12px)',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.5rem' }}>
                You&apos;re in!
              </h2>
              <p style={{ color: '#8888aa', fontSize: '0.9rem' }}>
                Redirecting to your dashboard...
              </p>
            </div>
          ) : (
            <>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#f0f0ff',
                marginBottom: '1.75rem',
                textAlign: 'center',
              }}>
                Access Your Account
              </h2>

              {/* Demo credentials form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: '#8888aa',
                    marginBottom: '0.5rem',
                  }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#12121a',
                      border: '1px solid #2a2a3d',
                      borderRadius: '8px',
                      color: '#f0f0ff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#9d4edd' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#2a2a3d' }}
                  />
                </div>

                {error && (
                  <p style={{
                    color: '#ff006e',
                    fontSize: '0.8rem',
                    margin: 0,
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(255,0,110,0.08)',
                    border: '1px solid rgba(255,0,110,0.2)',
                    borderRadius: '6px',
                  }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !email.trim()}
                  style={{
                    width: '100%',
                    background: loading ? '#2a2a3d' : 'linear-gradient(135deg, #9d4edd, #ff006e)',
                    border: 'none',
                    color: loading ? '#8888aa' : '#fff',
                    padding: '0.875rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s',
                    boxShadow: loading ? 'none' : '0 0 20px rgba(157,78,221,0.3)',
                  }}
                >
                  {loading ? 'SIGNING IN...' : 'SIGN IN →'}
                </button>
              </form>

              {/* Google Sign In (if configured) */}
              <div style={{ marginTop: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: '1.25rem 0',
                }}>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a3d' }} />
                  <span style={{ color: '#8888aa', fontSize: '0.75rem', letterSpacing: '0.06em' }}>OR</span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a3d' }} />
                </div>

                <button
                  onClick={() => signIn('google', { callbackUrl })}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid #2a2a3d',
                    color: '#f0f0ff',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                    letterSpacing: '0.04em',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9d4edd' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a3d' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign in with Google
                </button>
              </div>

              <p style={{
                textAlign: 'center',
                color: '#8888aa',
                fontSize: '0.72rem',
                marginTop: '1.25rem',
                lineHeight: 1.5,
              }}>
                No account needed — just enter your email.<br />
                We&apos;ll create one automatically.
              </p>
            </>
          )}
        </div>

        <p style={{
          textAlign: 'center',
          color: '#2a2a3d',
          fontSize: '0.7rem',
          marginTop: '1.5rem',
          lineHeight: 1.5,
        }}>
          All products are digital prompts for AI systems.<br />No real substances are sold.
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#8888aa' }}>Loading...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}
