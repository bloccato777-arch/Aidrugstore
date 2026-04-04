import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        purchases: {
          where: { status: 'completed' },
          include: { product: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    })

    return NextResponse.json(user?.purchases ?? [])
  } catch (error) {
    console.error('Error fetching purchases:', error)
    return NextResponse.json({ error: 'Failed to fetch purchases' }, { status: 500 })
  }
}
