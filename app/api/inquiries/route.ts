import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const inquirySchema = z.object({
  productId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  quantity: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = inquirySchema.parse(body)

    // Demo mode: Just return success without saving to database
    console.log('Inquiry submission:', validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        inquiryId: 'demo-' + Date.now(),
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid input data', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Demo mode: Return mock data
  const mockInquiries = [
    {
      id: '1',
      productId: '1',
      name: 'Demo User',
      email: 'demo@example.com',
      quantity: '100mg',
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    }
  ]

  return NextResponse.json({
    success: true,
    data: mockInquiries,
    pagination: {
      page: 1,
      limit: 10,
      total: 1,
      totalPages: 1,
    },
  })
}
