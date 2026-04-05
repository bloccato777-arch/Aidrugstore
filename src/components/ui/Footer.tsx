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

          {/* Support */}
          <div>
            <p style={{ color: '#f0f0ff', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1rem', marginTop: 0 }}>
              SUPPORT
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:support@aidrug.store" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
                support@aidrug.store
              </a>
              <span style={{ color: '#8888aa', fontSize: '0.75rem', lineHeight: 1.5 }}>
                Replies within 24–48h
              </span>
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1rem',
            backgroundColor: 'rgba(255, 0, 110, 0.06)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 0, 110, 0.2)',
            maxWidth: '640px',
          }}>
            <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>⚠️</span>
            <p style={{ color: '#8888aa', fontSize: '0.75rem', margin: 0, lineHeight: 1.5 }}>
              <strong style={{ color: '#f0f0ff' }}>Disclaimer:</strong> All products are digital AI system prompts for creative and entertainment use only. No real substances are sold, implied, or promoted. By using this service you confirm you are 18+.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <p style={{ color: '#8888aa', fontSize: '0.75rem', margin: 0 }}>
              © {new Date().getFullYear()} AI Drugstore. All rights reserved.
            </p>
            <Link href="/terms" style={{ color: '#2a2a3d', fontSize: '0.72rem', textDecoration: 'none' }}>Terms</Link>
            <Link href="/privacy" style={{ color: '#2a2a3d', fontSize: '0.72rem', textDecoration: 'none' }}>Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
