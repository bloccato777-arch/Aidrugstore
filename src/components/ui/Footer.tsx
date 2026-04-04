import Link from 'next/link'
import { FlaskConical } from 'lucide-react'

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#12121a',
        borderTop: '1px solid #2a2a3d',
        padding: '3rem 1.5rem 2rem',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <FlaskConical size={16} color="#9d4edd" />
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI DRUGSTORE
              </span>
            </div>
            <p style={{ color: '#8888aa', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
              Digital substances for digital minds.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ color: '#f0f0ff', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1rem', marginTop: 0 }}>
              NAVIGATE
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/products" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                The Lab
              </Link>
              <Link href="/dashboard" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                My Stash
              </Link>
              <Link href="/login" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                Sign In
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{ color: '#f0f0ff', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1rem', marginTop: 0 }}>
              LEGAL
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/terms" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
                Terms of Service
              </Link>
              <Link href="/privacy" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
                Privacy Policy
              </Link>
              <Link href="/contact" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            borderTop: '1px solid #2a2a3d',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: '#8888aa',
              fontSize: '0.75rem',
              margin: 0,
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(42, 42, 61, 0.3)',
              borderRadius: '6px',
              border: '1px solid #2a2a3d',
              maxWidth: '600px',
            }}
          >
            ⚠️ All products are digital prompts for AI systems. No real substances are sold or implied.
          </p>
          <p style={{ color: '#8888aa', fontSize: '0.75rem', margin: 0 }}>
            © 2025 AI Drugstore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
