import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wilmer Morales - Developer Portfolio',
  description: 'Passionate Web developer with expertise in React and NodeJS. Google WOW Hackathon Winner and Google Cloud Facilitator.',
  keywords: ['portfolio', 'developer', 'web development', 'software engineer', 'react', 'nodejs'],
  authors: [{ name: 'Wilmer Morales' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
} 