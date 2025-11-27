import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from '@/components/ProductCard'
import { LoadingState } from '@/components/LoadingState'
import { ErrorState } from '@/components/ErrorState'
import { Package } from 'lucide-react'

function App() {
  const { products, loading, error, refetch } = useProducts()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Product Store</h1>
              <p className="text-sm text-muted-foreground">
                Browse our collection of amazing products
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading && <LoadingState />}

        {error && <ErrorState message={error} onRetry={refetch} />}

        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="w-full py-12 text-center">
                <p className="text-muted-foreground">No products found.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {products.length} product{products.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default App
