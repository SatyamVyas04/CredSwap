import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CredSwap',
  description:
    'Unlock exclusive discounts, rewards, and premium perks without owning a credit card.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="text-white">
      <body>{children}</body>
    </html>
  )
}
