import { Product, Category, Inquiry, InquiryStatus } from '@prisma/client'

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
