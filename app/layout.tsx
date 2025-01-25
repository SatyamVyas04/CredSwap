import type { Metadata } from 'next'
import './globals.css'

import { Open_Sans } from 'next/font/google'
const open = Open_Sans({ subsets: ['latin'] })

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
    <html lang="en" className={`${open.className} text-white`}>
      <body>{children}</body>
    </html>
  )
}
