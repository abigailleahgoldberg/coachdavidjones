import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://coachdavidjones.com'),
  title: 'David Jones — AI Systems Strategist & Marketing Architect',
  description: 'David Jones architects AI-powered influence systems for brands, executives, and organizations ready to stop competing and start dominating.',
  openGraph: {
    title: 'David Jones — AI Systems Strategist',
    description: 'Architecting the future of influence with AI, data, and scaled content.',
    url: 'https://coachdavidjones.com',
    siteName: 'Coach David Jones',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Jones — AI Systems Strategist',
    description: 'Architecting the future of influence with AI, data, and scaled content.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
