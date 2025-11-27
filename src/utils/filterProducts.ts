import type { Product } from '@/types/product'

interface FilterOptions {
  searchQuery: string
  categoryId: number | null
  priceFilter: string
  sortBy: string
}

export function filterAndSortProducts(
  products: Product[],
  options: FilterOptions
): Product[] {
  let filtered = [...products]

  // Search filter
  if (options.searchQuery.trim()) {
    const query = options.searchQuery.toLowerCase()
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.name.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (options.categoryId !== null) {
    filtered = filtered.filter(
      (product) => product.category.id === options.categoryId
    )
  }

  // Price filter
  if (options.priceFilter !== 'all') {
    filtered = filtered.filter((product) => {
      switch (options.priceFilter) {
        case '0-50':
          return product.price >= 0 && product.price <= 50
        case '50-100':
          return product.price > 50 && product.price <= 100
        case '100-500':
          return product.price > 100 && product.price <= 500
        case '500+':
          return product.price > 500
        default:
          return true
      }
    })
  }

  // Sorting
  switch (options.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'name-desc':
      filtered.sort((a, b) => b.title.localeCompare(a.title))
      break
    default:
      // Keep original order
      break
  }

  return filtered
}

