import { useState, useEffect } from 'react'
import type { Category } from '@/types/product'

interface UseCategoriesResult {
  categories: Category[]
  loading: boolean
  error: string | null
}

const API_URL = 'https://api.escuelajs.co/api/v1/categories'

export function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load categories.'
        )
        setCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return {
    categories,
    loading,
    error,
  }
}

