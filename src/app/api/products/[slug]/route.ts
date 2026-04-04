import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const session = await getServerSession(authOptions)

    const product = await prisma.product.findUnique({
      where: { slug, active: true },
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    let hasPurchased = false
    if (session?.user?.id) {
      const purchase = await prisma.purchase.findFirst({
        where: {
          userId: session.user.id as string,
          productId: product.id,
          status: 'completed',
        },
      })
      hasPurchased = !!purchase
    }

    return NextResponse.json({
      ...product,
      fullPrompt: hasPurchased ? product.fullPrompt : null,
      hasPurchased,
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}
