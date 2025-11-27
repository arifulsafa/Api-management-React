import { useState, useEffect } from 'react'
import type { Product } from '@/types/product'

interface UseProductsResult {
  products: Product[]
  loading: boolean
  error: string | null
  refetch: () => void
}

const API_URL = 'https://api.escuelajs.co/api/v1/products'

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setProducts(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error && err.message
          ? err.message
          : 'Failed to load game data. Please refresh the page or try again later.'
      setError(errorMessage)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  }
}

