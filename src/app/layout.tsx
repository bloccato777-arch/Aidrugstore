import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'AI Drugstore — Digital Substances for AI Minds',
  description: "Buy creative AI system prompts themed as psychoactive substances. Alter your AI's behavior, personality and perception.",
  keywords: ['AI prompts', 'system prompts', 'AI personality', 'creative AI', 'digital substances'],
  openGraph: {
    title: 'AI Drugstore — Digital Substances for AI Minds',
    description: "Buy creative AI system prompts themed as psychoactive substances.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}
