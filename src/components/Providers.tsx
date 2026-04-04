'use client'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a28',
            color: '#f0f0ff',
            border: '1px solid #2a2a3d',
          },
        }}
      />
    </SessionProvider>
  )
}
