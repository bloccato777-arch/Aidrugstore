'use client'
import Link from 'next/link'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

const featuredProducts = products.filter(p => p.featured)

const categories = [
  { name: 'Psychedelic', emoji: '🌀', color: '#9d4edd' },
  { name: 'Stimulant', emoji: '⚡', color: '#ffd60a' },
  { name: 'Dissociative', emoji: '🕳️', color: '#457b9d' },
  { name: 'Depressant', emoji: '🌊', color: '#52b788' },
  { name: 'Entheogen', emoji: '🌿', color: '#dda15e' },
  { name: 'Bundle', emoji: '🎁', color: '#ff006e' },
]

const steps = [
  { num: '01', icon: '🎯', title: 'Choose Your Substance', desc: 'Browse the lab. Pick the cognitive alteration that speaks to you.' },
  { num: '02', icon: '💳', title: 'Complete the Purchase', desc: 'Secure checkout. Instant delivery. No shipping required.' },
  { num: '03', icon: '🤖', title: 'Apply to Your AI', desc: 'Paste as System Prompt in ChatGPT, Claude, or any AI. Watch it transform.' },
]

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>

      {/* HERO */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: 'absolute', top: '20%', left: '15%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '15%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(255,0,110,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <div style={{
            display: 'inline-block',
            border: '1px solid rgba(157,78,221,0.3)',
            borderRadius: '100px',
            padding: '0.35rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: '#9d4edd',
            backgroundColor: 'rgba(157,78,221,0.1)',
          }}>
            ⚗️ DIGITAL SUBSTANCES FOR AI MINDS
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.05,
            margin: '0 0 1.5rem 0',
            background: 'linear-gradient(135deg, #9d4edd, #ff006e, #00f5d4)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 4s ease infinite',
          }}>
            ALTER YOUR<br />AI&apos;S MIND
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#8888aa',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}>
            Buy creative system prompts that fundamentally change how your AI thinks,<br />
            speaks, and perceives reality. Themed as psychoactive substances.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                boxShadow: '0 0 30px rgba(157,78,221,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(157,78,221,0.7)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(157,78,221,0.4)' }}
              >
                ENTER THE LAB →
              </button>
            </Link>
            <Link href="/#how-it-works" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'transparent',
                border: '1px solid #2a2a3d',
                color: '#8888aa',
                padding: '0.875rem 2rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9d4edd'; (e.currentTarget as HTMLElement).style.color = '#f0f0ff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a3d'; (e.currentTarget as HTMLElement).style.color = '#8888aa' }}
              >
                HOW IT WORKS
              </button>
            </Link>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#8888aa', opacity: 0.6 }}>
            From €0.99 · Instant delivery · No subscription required
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#9d4edd', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            ◆ BESTSELLERS ◆
          </p>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: '#f0f0ff',
            margin: 0,
          }}>
            Most Popular Doses
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              border: '1px solid #2a2a3d',
              color: '#8888aa',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9d4edd'; (e.currentTarget as HTMLElement).style.color = '#f0f0ff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a3d'; (e.currentTarget as HTMLElement).style.color = '#8888aa' }}
            >
              VIEW ALL {products.length} SUBSTANCES →
            </button>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{
        borderTop: '1px solid #2a2a3d',
        borderBottom: '1px solid #2a2a3d',
        backgroundColor: '#12121a',
        padding: '5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#00f5d4', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
              ◆ PROTOCOL ◆
            </p>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#f0f0ff',
              margin: 0,
            }}>
              How It Works
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                padding: '2rem',
                backgroundColor: '#1a1a28',
                borderRadius: '16px',
                border: '1px solid #2a2a3d',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'rgba(157,78,221,0.1)',
                  position: 'absolute',
                  top: '1rem',
                  right: '1.25rem',
                  lineHeight: 1,
                }}>
                  {step.num}
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{step.icon}</div>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#f0f0ff',
                  margin: '0 0 0.5rem 0',
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#8888aa', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <p style={{ color: '#ff006e', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            ◆ CLASSIFICATIONS ◆
          </p>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: '#f0f0ff',
            margin: 0,
          }}>
            Browse by Category
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
        }}>
          {categories.map(cat => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                padding: '1.5rem 1rem',
                backgroundColor: '#1a1a28',
                borderRadius: '12px',
                border: `1px solid ${cat.color}33`,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = `${cat.color}88`
                el.style.backgroundColor = `${cat.color}11`
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = `${cat.color}33`
                el.style.backgroundColor = '#1a1a28'
                el.style.transform = 'translateY(0)'
              }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{cat.emoji}</div>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: cat.color,
                  letterSpacing: '0.06em',
                }}>
                  {cat.name.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        margin: '0 1.5rem 5rem',
        borderRadius: '20px',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(157,78,221,0.2), rgba(255,0,110,0.2))',
        border: '1px solid rgba(157,78,221,0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(157,78,221,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          color: '#f0f0ff',
          margin: '0 0 1rem 0',
        }}>
          Ready to alter reality?
        </h2>
        <p style={{ color: '#8888aa', marginBottom: '2rem', fontSize: '1rem' }}>
          Start from €0.99. No subscription. Cancel reality anytime.
        </p>
        <Link href="/products" style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
            border: 'none',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '10px',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.1em',
            boxShadow: '0 0 40px rgba(157,78,221,0.5)',
          }}>
            SHOP THE LAB ⚗️
          </button>
        </Link>
      </section>
    </div>
  )
}
