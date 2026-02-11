'use client'

import { useState } from 'react'
import { ArrowLeft, Package, Beaker, FileText } from 'lucide-react'
import Link from 'next/link'
import InquiryModal from '@/components/products/InquiryModal'

export const runtime = 'edge'

// Mock product data - will be replaced with database query
const mockProduct = {
  id: '1',
  name: 'Imatinib Mesylate',
  nameEn: 'Imatinib Mesylate',
  casNumber: '220127-57-1',
  molecularFormula: 'C₂₉H₃₁N₇O·CH₄O₃S',
  molecularWeight: 589.7,
  purity: '≥98% (HPLC)',
  description: 'Imatinib mesylate is a tyrosine kinase inhibitor used in the treatment of multiple cancers, most notably Philadelphia chromosome-positive (Ph+) chronic myelogenous leukemia (CML).',
  specifications: [
    { label: 'Appearance', value: 'White to off-white powder' },
    { label: 'Solubility', value: 'DMSO, Methanol' },
    { label: 'Storage', value: '-20°C, protect from light' },
    { label: 'Shelf Life', value: '2 years' },
  ],
  applications: [
    'Cancer research',
    'Kinase inhibitor studies',
    'Drug development',
    'Biochemical assays',
  ],
  categoryName: 'Small Molecules',
  inStock: true,
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const product = mockProduct // In real app: fetch from database using params.id

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {product.categoryName}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  {product.inStock && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      In Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Chemical Structure Placeholder */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <Beaker className="w-16 h-16 mx-auto mb-2" />
                  <p>Chemical Structure</p>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">CAS Number:</span>
                  <p className="text-gray-900">{product.casNumber}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Purity:</span>
                  <p className="text-gray-900">{product.purity}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Molecular Formula:</span>
                  <p className="text-gray-900">{product.molecularFormula}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Molecular Weight:</span>
                  <p className="text-gray-900">{product.molecularWeight} g/mol</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Specifications
              </h2>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b last:border-0">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Applications</h2>
              <ul className="space-y-2">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Request a Quote</h3>
              <p className="text-gray-600 text-sm mb-6">
                Get pricing and availability information for this product.
              </p>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Inquire Now
              </button>

              <div className="mt-6 pt-6 border-t space-y-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700 mb-1">Need Help?</p>
                  <p className="text-gray-600">Contact our technical support team</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">📧 Email</p>
                  <a href="mailto:info@pharmatrade.com" className="text-blue-600 hover:underline">
                    info@pharmatrade.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">📞 Phone</p>
                  <a href="tel:+1-800-PHARMA" className="text-blue-600 hover:underline">
                    +1-800-PHARMA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        productName={product.name}
        productId={product.id}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  )
}
