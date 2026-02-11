import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  casNumber?: string
  purity?: string
  imageUrl?: string | null
  categoryName: string
}

export default function ProductCard({ id, name, casNumber, purity, imageUrl, categoryName }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Product Image */}
        <div className="relative h-48 bg-gray-100 flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="text-gray-400 text-center p-4">
              <div className="text-4xl mb-2">🧪</div>
              <div className="text-sm">No image available</div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="text-xs text-blue-600 font-medium mb-2">{categoryName}</div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
            {name}
          </h3>

          <div className="space-y-1 text-sm text-gray-600 mb-3">
            {casNumber && (
              <div>
                <span className="font-medium">CAS:</span> {casNumber}
              </div>
            )}
            {purity && (
              <div>
                <span className="font-medium">Purity:</span> {purity}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-medium text-sm flex items-center gap-1">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
