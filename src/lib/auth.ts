import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  // Niente adapter — usiamo JWT puro (più semplice e compatibile)
  providers: [
    // Google OAuth — opzionale, funziona solo se le env vars sono settate
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
    // Demo credentials provider — inserisci qualsiasi email, niente password
    CredentialsProvider({
      name: 'Demo Account',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'demo@aidrug.store' },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null
        try {
          // Crea o trova l'utente nel DB
          const user = await prisma.user.upsert({
            where: { email: credentials.email },
            update: {},
            create: {
              email: credentials.email,
              name: credentials.email.split('@')[0],
            },
          })
          return { id: user.id, email: user.email, name: user.name }
        } catch (error) {
          console.error('Auth DB error:', error)
          // Fallback: se il DB non è raggiungibile, usa un utente mock locale
          return {
            id: 'local-' + credentials.email,
            email: credentials.email,
            name: credentials.email.split('@')[0],
          }
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id as string ?? token.sub,
      },
    }),
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
