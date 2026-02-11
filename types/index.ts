// Product types
export interface Product {
  id: string
  name: string
  nameEn: string
  casNumber?: string
  molecularFormula?: string
  molecularWeight?: number
  purity?: string
  description?: string
  descriptionEn?: string
  specifications?: string
  applications?: string
  applicationsEn?: string
  imageUrl?: string | null
  structureImage?: string
  price?: number
  inStock: boolean
  featured: boolean
  categoryId: string
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  nameEn: string
  slug: string
  description?: string
  descriptionEn?: string
  createdAt: Date
  updatedAt: Date
}

export enum InquiryStatus {
  PENDING = 'PENDING',
  CONTACTED = 'CONTACTED',
  QUOTED = 'QUOTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Inquiry {
  id: string
  productId: string
  name: string
  email: string
  company?: string
  phone?: string
  country?: string
  quantity: string
  message?: string
  status: InquiryStatus
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export type ProductWithCategory = Product & {
  category: Category
}

export type InquiryWithProduct = Inquiry & {
  product: Product
}

export interface ProductFilters {
  categoryId?: string
  search?: string
  featured?: boolean
  inStock?: boolean
}

export interface InquiryFormData {
  productId: string
  name: string
  email: string
  company?: string
  phone?: string
  country?: string
  quantity: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
