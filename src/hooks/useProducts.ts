'use client'
import useSWR from 'swr'
import { Product } from '@/data/products'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function useProducts(category?: string, featured?: boolean) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (featured) params.set('featured', 'true')

  const { data, error, isLoading } = useSWR<Product[]>(
    `/api/products?${params.toString()}`,
    fetcher
  )

  return { products: data ?? [], error, isLoading }
}
