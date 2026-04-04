'use client'
import { useState, useMemo } from 'react'
import { products, Product } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

const categories = ['All', 'Psychedelic', 'Stimulant', 'Dissociative', 'Depressant', 'Entheogen', 'Bundle']
const dosages = ['All', 'Low', 'Medium', 'High', 'Extreme']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price ↑', value: 'price-asc' },
  { label: 'Price ↓', value: 'price-desc' },
  { label: 'Name', value: 'name' },
]

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [dosage, setDosage] = useState('All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let list: Product[] = [...products]

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.effects.some(e => e.toLowerCase().includes(q))
      )
    }

    if (category !== 'All') list = list.filter(p => p.category === category)
    if (dosage !== 'All') list = list.filter(p => p.dosage === dosage)

    list.sort((a, b) => {
      if (sort === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })

    return list
  }, [search, category, dosage, sort])

  const pillStyle = (active: boolean, color = '#9d4edd') => ({
    padding: '0.375rem 0.875rem',
    borderRadius: '100px',
    border: `1px solid ${active ? color : '#2a2a3d'}`,
    backgroundColor: active ? `${color}22` : 'transparent',
    color: active ? color : '#8888aa',
    fontSize: '0.8rem',
    fontWeight: active ? 700 : 400,
    cursor: 'pointer',
    letterSpacing: '0.04em',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap' as const,
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid #2a2a3d',
        backgroundColor: '#12121a',
        padding: '3rem 1.5rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ color: '#9d4edd', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            ⚗️ CATALOG
          </p>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#f0f0ff',
            margin: '0 0 1.5rem 0',
            letterSpacing: '0.04em',
          }}>
            THE LAB
          </h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search substances, effects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '0.75rem 1rem',
              backgroundColor: '#1a1a28',
              border: '1px solid #2a2a3d',
              borderRadius: '10px',
              color: '#f0f0ff',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#9d4edd' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#2a2a3d' }}
          />
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Filters */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: '#8888aa', fontSize: '0.75rem', letterSpacing: '0.08em', marginRight: '0.25rem' }}>CATEGORY:</span>
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)} style={pillStyle(category === c)}>
                {c}
              </button>
            ))}
          </div>

          {/* Dosage + Sort */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ color: '#8888aa', fontSize: '0.75rem', letterSpacing: '0.08em', marginRight: '0.25rem' }}>DOSAGE:</span>
              {dosages.map(d => (
                <button key={d} onClick={() => setDosage(d)} style={pillStyle(dosage === d, '#00f5d4')}>
                  {d}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: '#8888aa', fontSize: '0.75rem', letterSpacing: '0.08em' }}>SORT:</span>
              {sortOptions.map(s => (
                <button key={s.value} onClick={() => setSort(s.value)} style={pillStyle(sort === s.value, '#ff006e')}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <p style={{ color: '#8888aa', fontSize: '0.8rem', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
          {filtered.length} substance{filtered.length !== 1 ? 's' : ''} available
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
            <p style={{ color: '#8888aa', fontSize: '1rem' }}>No substances match your search.</p>
            <button
              onClick={() => { setSearch(''); setCategory('All'); setDosage('All') }}
              style={{
                marginTop: '1rem',
                background: 'transparent',
                border: '1px solid #2a2a3d',
                color: '#9d4edd',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {filtered.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
