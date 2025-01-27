import type { Metadata } from 'next'
import './globals.css'

import { Hanken_Grotesk } from 'next/font/google'
import { AOSInit } from './aos'

const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'CredSwap',
  description:
    'Unlock exclusive discounts, rewards, and premium perks without owning a credit card.',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`text-white ${grotesk.className}`}>
      <AOSInit />
      <body>{children}</body>
    </html>
  )
}
