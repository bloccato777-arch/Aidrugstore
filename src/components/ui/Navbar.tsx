'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import { Menu, X, FlaskConical } from 'lucide-react'

export function Navbar() {
  const { data: session } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)

  const initials = session?.user?.name
    ? session.user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
    : session?.user?.email?.[0]?.toUpperCase() ?? '?'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2a2a3d',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FlaskConical size={20} color="#9d4edd" />
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg, #9d4edd, #ff006e, #00f5d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI DRUGSTORE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          <Link
            href="/products"
            style={{
              color: '#8888aa',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0f0ff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8888aa')}
          >
            THE LAB
          </Link>
          <Link
            href="/#how-it-works"
            style={{
              color: '#8888aa',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0f0ff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8888aa')}
          >
            ABOUT
          </Link>

          {session ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link
                href="/dashboard"
                style={{
                  color: '#8888aa',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f0f0ff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8888aa')}
              >
                MY STASH
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {initials}
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  style={{
                    background: 'none',
                    border: '1px solid #2a2a3d',
                    color: '#8888aa',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#9d4edd'
                    e.currentTarget.style.color = '#f0f0ff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#2a2a3d'
                    e.currentTarget.style.color = '#8888aa'
                  }}
                >
                  SIGN OUT
                </button>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button
                style={{
                  background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                  border: 'none',
                  color: '#fff',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                CONNECT
              </button>
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#f0f0ff',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
          className="show-mobile"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#12121a',
            borderTop: '1px solid #2a2a3d',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#f0f0ff', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.05em' }}
          >
            THE LAB
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#f0f0ff', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.05em' }}
          >
            ABOUT
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                style={{ color: '#f0f0ff', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                MY STASH
              </Link>
              <button
                onClick={() => { signOut({ callbackUrl: '/' }); setMobileOpen(false) }}
                style={{
                  background: 'none',
                  border: '1px solid #2a2a3d',
                  color: '#8888aa',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setMobileOpen(false)}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                  border: 'none',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%',
                  letterSpacing: '0.08em',
                }}
              >
                CONNECT
              </button>
            </Link>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
