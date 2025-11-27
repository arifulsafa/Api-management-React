import { Select } from '@/components/ui/Select'
import { Label } from '@/components/ui/Label'
import { SearchBar } from '@/components/SearchBar'
import { Filter } from 'lucide-react'

interface ProductFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  priceFilter: string
  onPriceFilterChange: (value: string) => void
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  priceFilter,
  onPriceFilterChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold">Filters & Search</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        <div className="space-y-2">
          <Label>Search Products</Label>
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <Select
            value={priceFilter}
            onChange={(e) => onPriceFilterChange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500+">$500+</option>
          </Select>
        </div>
      </div>
    </div>
  )
}

