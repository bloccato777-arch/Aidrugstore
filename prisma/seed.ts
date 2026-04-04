import { PrismaClient } from '../src/generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import { products } from '../src/data/products'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding products...')

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        substance: product.substance,
        tagline: product.tagline,
        description: product.description,
        effects: product.effects,
        dosage: product.dosage,
        category: product.category,
        price: product.price,
        previewText: product.previewText,
        fullPrompt: product.fullPrompt,
        emoji: product.emoji,
        color: product.color,
        colorSecond: product.colorSecond,
        featured: product.featured,
        active: true,
      },
      create: {
        slug: product.slug,
        name: product.name,
        substance: product.substance,
        tagline: product.tagline,
        description: product.description,
        effects: product.effects,
        dosage: product.dosage,
        category: product.category,
        price: product.price,
        previewText: product.previewText,
        fullPrompt: product.fullPrompt,
        emoji: product.emoji,
        color: product.color,
        colorSecond: product.colorSecond,
        featured: product.featured,
        active: true,
      },
    })
    console.log(`✓ Seeded: ${product.name}`)
  }

  console.log('Seeding complete!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
