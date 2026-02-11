'use client'

import { useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import ProductFilters from '@/components/products/ProductFilters'

// Mock data - will be replaced with real database queries
const mockCategories = [
  { id: '1', name: 'Small Molecules' },
  { id: '2', name: 'Biologics' },
  { id: '3', name: 'Peptides' },
  { id: '4', name: 'ADCs/XDCs' },
]

const mockProducts = [
  {
    id: '1',
    name: 'Imatinib Mesylate',
    casNumber: '220127-57-1',
    purity: '≥98%',
    imageUrl: null,
    categoryName: 'Small Molecules',
  },
  {
    id: '2',
    name: 'Erlotinib HCl',
    casNumber: '183319-69-9',
    purity: '≥99%',
    imageUrl: null,
    categoryName: 'Small Molecules',
  },
  {
    id: '3',
    name: 'Bevacizumab Biosimilar',
    casNumber: '216974-75-3',
    purity: '≥95%',
    imageUrl: null,
    categoryName: 'Biologics',
  },
  {
    id: '4',
    name: 'Semaglutide',
    casNumber: '910463-68-2',
    purity: '≥98%',
    imageUrl: null,
    categoryName: 'Peptides',
  },
  {
    id: '5',
    name: 'Trastuzumab Emtansine',
    casNumber: '139504-50-0',
    purity: '≥97%',
    imageUrl: null,
    categoryName: 'ADCs/XDCs',
  },
  {
    id: '6',
    name: 'Osimertinib',
    casNumber: '1421373-65-0',
    purity: '≥99%',
    imageUrl: null,
    categoryName: 'Small Molecules',
  },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [currentCategory, setCurrentCategory] = useState('')

  const handleSearch = (query: string) => {
    const filtered = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.casNumber?.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId)
    if (!categoryId) {
      setFilteredProducts(mockProducts)
    } else {
      const category = mockCategories.find((c) => c.id === categoryId)
      const filtered = mockProducts.filter(
        (product) => product.categoryName === category?.name
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Catalog</h1>
          <p className="text-gray-600">
            Browse our comprehensive collection of pharmaceutical compounds
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          categories={mockCategories}
        />

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredProducts.length} products
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
