import type { Metadata } from 'next'
import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'
import { DefaultSeo } from 'next-seo'
import seoConfig from '../seo.config'

const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

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
    <html lang="en" className={`text-white ${grotesk.className}`}>
      <DefaultSeo {...seoConfig} />
      <body>{children}</body>
    </html>
  )
}
