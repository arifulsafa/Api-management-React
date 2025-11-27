import { useState, useMemo } from 'react'
import { useProducts } from '@/hooks/useProducts'
import { useCategories } from '@/hooks/useCategories'
import { ProductCard } from '@/components/ProductCard'
import { LoadingState } from '@/components/LoadingState'
import { ErrorState } from '@/components/ErrorState'
import { CategoryFilter } from '@/components/CategoryFilter'
import { ProductFilters } from '@/components/ProductFilters'
import { ProductModal } from '@/components/ProductModal'
import { Package, Sparkles } from 'lucide-react'
import { filterAndSortProducts } from '@/utils/filterProducts'
import type { Product } from '@/types/product'

function App() {
  const { products, loading, error, refetch } = useProducts()
  const { categories, loading: categoriesLoading } = useCategories()

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [priceFilter, setPriceFilter] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    if (loading) return []
    return filterAndSortProducts(products, {
      searchQuery,
      categoryId: selectedCategory,
      priceFilter,
      sortBy,
    })
  }, [products, searchQuery, selectedCategory, priceFilter, sortBy, loading])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedCategory !== null ? 1 : 0) +
    (priceFilter !== 'all' ? 1 : 0) +
    (sortBy !== 'default' ? 1 : 0)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Package className="h-8 w-8 text-primary" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Product Store
                </h1>
                <p className="text-sm text-muted-foreground">
                  Browse our collection of amazing products
                </p>
              </div>
            </div>
            {!loading && !error && (
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {filteredProducts.length}
                </span>
                <span>products</span>
                {activeFiltersCount > 0 && (
                  <span className="ml-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading && <LoadingState />}

        {error && <ErrorState message={error} onRetry={refetch} />}

        {!loading && !error && (
          <>
            <div className="space-y-6 mb-8">
              <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                priceFilter={priceFilter}
                onPriceFilterChange={setPriceFilter}
              />

              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Categories</h2>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  loading={categoriesLoading}
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="w-full py-12 text-center space-y-4">
                <Package className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <div>
                  <p className="text-lg font-semibold">No products found</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {activeFiltersCount > 0
                      ? 'Try adjusting your filters or search query'
                      : 'No products available at the moment'}
                  </p>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedCategory(null)
                        setPriceFilter('all')
                        setSortBy('default')
                      }}
                      className="mt-4 text-sm text-primary hover:underline"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} of {products.length} product
                    {products.length !== 1 ? 's' : ''}
                  </p>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedCategory(null)
                        setPriceFilter('all')
                        setSortBy('default')
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard
                        product={product}
                        onClick={() => handleProductClick(product)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App
