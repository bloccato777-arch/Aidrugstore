import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/data/products'
import { CategoryBadge } from '@/components/ui/CategoryBadge'
import { BuyButton } from '@/components/ui/BuyButton'
import { ProductCard } from '@/components/ui/ProductCard'

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) notFound()

  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  const instructions = [
    'Purchase this prompt — instant delivery to your dashboard.',
    'Copy the full system prompt from your dashboard.',
    'Paste it as System Prompt in ChatGPT, Claude, Gemini, or any AI.',
    'Start your session and experience the altered state.',
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid #2a2a3d', padding: '0.75rem 1.5rem', backgroundColor: '#12121a' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: '#8888aa' }}>
          <Link href="/" style={{ color: '#8888aa', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/products" style={{ color: '#8888aa', textDecoration: 'none' }}>The Lab</Link>
          <span>›</span>
          <span style={{ color: '#f0f0ff' }}>{product.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }} className="page-content">
        <div className="product-layout">

          {/* LEFT: Product Details */}
          <div>
            {/* Emoji */}
            <div
              className="product-emoji"
              style={{
                filter: `drop-shadow(0 0 30px ${product.color}88)`,
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              {product.emoji}
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <CategoryBadge category={product.category} />
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#f0f0ff',
              margin: '0 0 0.5rem 0',
              letterSpacing: '0.02em',
            }}>
              {product.name}
            </h1>

            {/* Tagline */}
            <p style={{ color: '#8888aa', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {product.tagline}
            </p>

            {/* Price (mobile-visible) */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}>
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 900,
                fontSize: '2.5rem',
                color: '#00f5d4',
              }}>
                €{product.price.toFixed(2)}
              </span>
              <span style={{ color: '#8888aa', fontSize: '0.85rem' }}>one-time</span>
            </div>

            {/* Description */}
            <div style={{
              backgroundColor: '#1a1a28',
              border: '1px solid #2a2a3d',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                color: '#8888aa',
                marginBottom: '0.75rem',
              }}>
                ◆ EFFECTS ON YOUR AI
              </h3>
              <p style={{ color: '#f0f0ff', lineHeight: 1.7, margin: 0 }}>
                {product.description}
              </p>
            </div>

            {/* Effects list */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                color: '#8888aa',
                marginBottom: '1rem',
              }}>
                ◆ DOCUMENTED EFFECTS
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.effects.map((effect, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#f0f0ff',
                    fontSize: '0.95rem',
                  }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      backgroundColor: product.color, flexShrink: 0,
                      boxShadow: `0 0 8px ${product.color}`,
                    }} />
                    {effect}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prompt Preview */}
            <div style={{
              backgroundColor: '#12121a',
              border: `1px solid ${product.color}44`,
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                color: product.color,
                marginBottom: '1rem',
              }}>
                ◆ PROMPT PREVIEW
              </h3>
              <div style={{ position: 'relative' }}>
                <p style={{
                  color: '#8888aa',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  margin: 0,
                  filter: 'blur(3px)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}>
                  {product.previewText}
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent 0%, #12121a 80%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#8888aa',
                    backgroundColor: '#1a1a28',
                    border: '1px solid #2a2a3d',
                    borderRadius: '100px',
                    padding: '0.25rem 0.75rem',
                  }}>
                    🔒 Full prompt unlocks after purchase
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div style={{
              backgroundColor: '#1a1a28',
              border: '1px solid #2a2a3d',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                color: '#8888aa',
                marginBottom: '1.25rem',
              }}>
                ◆ INSTRUCTIONS FOR USE
              </h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {instructions.map((step, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      color: '#9d4edd',
                      minWidth: '1.5rem',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: '#8888aa', fontSize: '0.9rem', lineHeight: 1.5 }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT: Buy Panel */}
          <div className="buy-panel">
            <div style={{
              backgroundColor: '#1a1a28',
              border: `1px solid ${product.color}44`,
              borderRadius: '16px',
              padding: '2rem',
              background: `linear-gradient(160deg, #1a1a28 0%, ${product.color}11 100%)`,
            }}>
              {/* Price */}
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 900,
                  fontSize: '3rem',
                  color: '#00f5d4',
                  lineHeight: 1,
                }}>
                  €{product.price.toFixed(2)}
                </div>
                <div style={{ color: '#8888aa', fontSize: '0.8rem', marginTop: '0.25rem' }}>one-time purchase</div>
              </div>

              {/* Buy Button */}
              <BuyButton productSlug={product.slug} price={product.price} />

              <p style={{
                fontSize: '0.7rem',
                color: '#8888aa',
                textAlign: 'center',
                marginTop: '0.75rem',
                lineHeight: 1.5,
              }}>
                Instant delivery to your dashboard.<br />Secure payment via Stripe.
              </p>

              {/* Details */}
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #2a2a3d',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8888aa', fontSize: '0.8rem' }}>Contains</span>
                  <span style={{ color: '#f0f0ff', fontSize: '0.8rem' }}>{product.emoji} {product.substance}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8888aa', fontSize: '0.8rem' }}>Category</span>
                  <CategoryBadge category={product.category} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8888aa', fontSize: '0.8rem' }}>Format</span>
                  <span style={{ color: '#f0f0ff', fontSize: '0.8rem' }}>System Prompt (.txt)</span>
                </div>
              </div>

              <div style={{
                marginTop: '1.5rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(157,78,221,0.08)',
                border: '1px solid rgba(157,78,221,0.2)',
                borderRadius: '8px',
                fontSize: '0.7rem',
                color: '#8888aa',
                lineHeight: 1.5,
              }}>
                ⚠️ Works with ChatGPT, Claude, Gemini, Llama, and most AI assistants that accept system prompts.
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #2a2a3d' }}>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: '#f0f0ff',
              marginBottom: '1.5rem',
            }}>
              More {product.category} Substances
            </h2>
            <div className="products-grid">
              {related.map(p => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stili mobile ora in globals.css */}
    </div>
  )
}
