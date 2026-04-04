import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')

    const products = await prisma.product.findMany({
      where: {
        active: true,
        ...(category ? { category } : {}),
        ...(featured === 'true' ? { featured: true } : {}),
      },
      select: {
        id: true,
        slug: true,
        name: true,
        substance: true,
        tagline: true,
        description: true,
        effects: true,
        dosage: true,
        category: true,
        price: true,
        previewText: true,
        emoji: true,
        color: true,
        colorSecond: true,
        featured: true,
      },
      orderBy: [{ featured: 'desc' }, { price: 'asc' }],
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
