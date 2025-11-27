import { X, Tag, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { Product } from '@/types/product'
import { cn } from '@/lib/utils'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product || !isOpen) return null

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      onClick={onClose}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />
      <div
        className="relative z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg border bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[0] || 'https://placehold.co/600x600'}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-md border"
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold">{product.title}</h2>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary">
                  <Tag className="mr-1 h-3 w-3" />
                  {product.category.name}
                </Badge>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span className="text-4xl font-bold text-primary">
                {formattedPrice}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Product ID: <span className="font-mono">{product.id}</span>
              </div>
              {product.creationAt && (
                <div className="text-sm text-muted-foreground">
                  Added:{' '}
                  {new Date(product.creationAt).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

