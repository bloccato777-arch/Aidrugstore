'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Product } from '@/data/products'
import { CategoryBadge } from './CategoryBadge'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  return (
    <motion.div
      onClick={() => router.push(`/product/${product.slug}`)}
      style={{
        background: `linear-gradient(135deg, ${product.color}22, ${product.colorSecond}44)`,
        border: `1px solid ${product.color}44`,
        borderRadius: '16px',
        padding: '1.5rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1a1a28',
      }}
      whileHover={{
        scale: 1.02,
        borderColor: `${product.color}99`,
        boxShadow: `0 8px 32px ${product.color}33, 0 0 0 1px ${product.color}44`,
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Glow background */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${product.color}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Emoji */}
      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', lineHeight: 1 }}>
        {product.emoji}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.25rem',
          color: '#f0f0ff',
          margin: '0 0 0.25rem 0',
          letterSpacing: '0.02em',
        }}
      >
        {product.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          color: '#8888aa',
          fontSize: '0.8rem',
          margin: '0 0 1rem 0',
          lineHeight: 1.4,
        }}
      >
        {product.tagline}
      </p>

      {/* Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        <CategoryBadge category={product.category} />
      </div>

      {/* Effects */}
      <ul style={{ margin: '0 0 1.25rem 0', padding: 0, listStyle: 'none' }}>
        {product.effects.slice(0, 3).map((effect, i) => (
          <li
            key={i}
            style={{
              color: '#8888aa',
              fontSize: '0.8rem',
              padding: '0.2rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span style={{ color: product.color, fontSize: '0.6rem' }}>◆</span>
            {effect}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.4rem',
            color: '#00f5d4',
          }}
        >
          €{product.price.toFixed(2)}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            color: '#8888aa',
            border: '1px solid #2a2a3d',
            borderRadius: '4px',
            padding: '0.2rem 0.5rem',
            letterSpacing: '0.06em',
          }}
        >
          VIEW →
        </span>
      </div>
    </motion.div>
  )
}
