import { Badge } from '@/components/ui/Badge'
import type { Category } from '@/types/product'
import { X } from 'lucide-react'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: number | null
  onSelectCategory: (categoryId: number | null) => void
  loading?: boolean
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  loading = false,
}: CategoryFilterProps) {
  if (loading) {
    return (
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-24 animate-pulse rounded-full bg-muted"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => onSelectCategory(null)}
        className="cursor-pointer"
      >
        All Products
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() =>
            onSelectCategory(
              selectedCategory === category.id ? null : category.id
            )
          }
          className="cursor-pointer"
        >
          {category.name}
          {selectedCategory === category.id && (
            <X className="ml-1 h-3 w-3" />
          )}
        </Badge>
      ))}
    </div>
  )
}

