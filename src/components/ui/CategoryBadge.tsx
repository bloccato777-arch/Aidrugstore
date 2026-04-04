type Category = 'Psychedelic' | 'Stimulant' | 'Dissociative' | 'Depressant' | 'Entheogen' | 'Opioid' | 'Truth Serum' | 'Bundle'

interface CategoryBadgeProps {
  category: Category | string
}

const categoryConfig: Record<string, { emoji: string; color: string; bg: string; border: string }> = {
  Psychedelic: {
    emoji: '🌀',
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.12)',
    border: 'rgba(168, 85, 247, 0.3)',
  },
  Stimulant: {
    emoji: '⚡',
    color: '#ffd60a',
    bg: 'rgba(255, 214, 10, 0.12)',
    border: 'rgba(255, 214, 10, 0.3)',
  },
  Dissociative: {
    emoji: '🕳️',
    color: '#60a5fa',
    bg: 'rgba(96, 165, 250, 0.12)',
    border: 'rgba(96, 165, 250, 0.3)',
  },
  Depressant: {
    emoji: '🌊',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.12)',
    border: 'rgba(52, 211, 153, 0.3)',
  },
  Entheogen: {
    emoji: '🌿',
    color: '#fb923c',
    bg: 'rgba(251, 146, 60, 0.12)',
    border: 'rgba(251, 146, 60, 0.3)',
  },
  Opioid: {
    emoji: '🌑',
    color: '#94a3b8',
    bg: 'rgba(148, 163, 184, 0.12)',
    border: 'rgba(148, 163, 184, 0.3)',
  },
  'Truth Serum': {
    emoji: '🔬',
    color: '#00f5d4',
    bg: 'rgba(0, 245, 212, 0.12)',
    border: 'rgba(0, 245, 212, 0.3)',
  },
  Bundle: {
    emoji: '🎁',
    color: '#f0f0ff',
    bg: 'rgba(157, 78, 221, 0.12)',
    border: 'rgba(157, 78, 221, 0.3)',
  },
}

const fallbackConfig = {
  emoji: '💊',
  color: '#8888aa',
  bg: 'rgba(136, 136, 170, 0.12)',
  border: 'rgba(136, 136, 170, 0.3)',
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = categoryConfig[category] ?? fallbackConfig
  const isBundle = category === 'Bundle'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0.25rem 0.625rem',
        borderRadius: '4px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        color: isBundle ? 'transparent' : config.color,
        background: isBundle
          ? 'linear-gradient(135deg, #9d4edd, #ff006e, #00f5d4)'
          : config.bg,
        WebkitBackgroundClip: isBundle ? 'text' : undefined,
        WebkitTextFillColor: isBundle ? 'transparent' : undefined,
        backgroundClip: isBundle ? 'text' : undefined,
        border: `1px solid ${config.border}`,
        backgroundColor: isBundle ? undefined : config.bg,
      }}
    >
      <span style={{ WebkitTextFillColor: 'initial', color: 'initial' }}>{config.emoji}</span>
      {category.toUpperCase()}
    </span>
  )
}
