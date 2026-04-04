'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

interface GlowButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
}

const sizeStyles = {
  sm: { padding: '0.4rem 0.9rem', fontSize: '0.8rem' },
  md: { padding: '0.625rem 1.5rem', fontSize: '0.875rem' },
  lg: { padding: '0.875rem 2rem', fontSize: '1rem' },
}

const variantStyles = {
  primary: {
    background: 'linear-gradient(135deg, #9d4edd, #ff006e)',
    border: 'none',
    color: '#fff',
    boxShadow: '0 0 0px rgba(157, 78, 221, 0)',
  },
  secondary: {
    background: 'transparent',
    border: '1px solid #9d4edd',
    color: '#9d4edd',
    boxShadow: '0 0 0px rgba(157, 78, 221, 0)',
  },
  danger: {
    background: 'linear-gradient(135deg, #ff006e, #ff4d4d)',
    border: 'none',
    color: '#fff',
    boxShadow: '0 0 0px rgba(255, 0, 110, 0)',
  },
}

const variantHoverShadow = {
  primary: '0 0 20px rgba(157, 78, 221, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)',
  secondary: '0 0 15px rgba(157, 78, 221, 0.4)',
  danger: '0 0 20px rgba(255, 0, 110, 0.5)',
}

export function GlowButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  onClick,
  href,
  disabled = false,
  type = 'button',
  style,
}: GlowButtonProps) {
  const baseStyle: React.CSSProperties = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    borderRadius: '8px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'box-shadow 0.2s, opacity 0.2s',
    fontFamily: 'Space Grotesk, sans-serif',
    ...style,
  }

  const button = (
    <motion.button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      style={baseStyle}
      whileTap={{ scale: disabled || loading ? 1 : 0.96 }}
      whileHover={
        disabled || loading
          ? {}
          : {
              boxShadow: variantHoverShadow[variant],
            }
      }
      transition={{ duration: 0.15 }}
    >
      {loading && <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />}
      {children}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </motion.button>
  )

  if (href && !disabled && !loading) {
    return <Link href={href} style={{ textDecoration: 'none' }}>{button}</Link>
  }

  return button
}
