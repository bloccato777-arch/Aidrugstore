'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function usePurchases() {
  const { data, error, isLoading, mutate } = useSWR('/api/user/purchases', fetcher)
  return { purchases: data ?? [], error, isLoading, mutate }
}
