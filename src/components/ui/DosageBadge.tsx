type Dosage = 'Low' | 'Medium' | 'High' | 'Extreme'

interface DosageBadgeProps {
  dosage: Dosage
}

const dosageConfig: Record<Dosage, { color: string; bg: string; border: string; label: string; pulse?: boolean }> = {
  Low: {
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)',
    label: '▸ LOW DOSE',
  },
  Medium: {
    color: '#fbbf24',
    bg: 'rgba(251, 191, 36, 0.12)',
    border: 'rgba(251, 191, 36, 0.3)',
    label: '▸▸ MEDIUM DOSE',
  },
  High: {
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.12)',
    border: 'rgba(249, 115, 22, 0.3)',
    label: '▸▸▸ HIGH DOSE',
  },
  Extreme: {
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.12)',
    border: 'rgba(239, 68, 68, 0.4)',
    label: '▸▸▸▸ EXTREME',
    pulse: true,
  },
}

export function DosageBadge({ dosage }: DosageBadgeProps) {
  const config = dosageConfig[dosage]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.625rem',
        borderRadius: '4px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: config.color,
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        animation: config.pulse ? 'dosage-pulse 1.5s ease-in-out infinite' : 'none',
      }}
    >
      {config.label}
      <style>{`
        @keyframes dosage-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </span>
  )
}
