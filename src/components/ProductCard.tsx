import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/Card'
import type { Product } from '@/types/product'
import { Tag } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const mainImage = product.images[0] || 'https://placehold.co/400x300'
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <CardImage src={mainImage} alt={product.title} />
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
            {product.title}
          </CardTitle>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {product.category.name}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 mb-4 min-h-[2.5rem]">
          {product.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{formattedPrice}</span>
          <span className="text-xs text-muted-foreground">#{product.id}</span>
        </div>
      </CardContent>
    </Card>
  )
}

