import { DefaultSeoProps } from 'next-seo'

const defaultSeoConfig: DefaultSeoProps = {
  title: 'CredSwap',
  description:
    'Unlock exclusive discounts, rewards, and premium perks without owning a credit card.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cred-swap.vercel.app',
    site_name: 'CredSwap',
    images: [
      {
        url: '/assets/logo/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'CredSwap Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@yourtwitterhandle',
    site: '@yourtwitterhandle',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/assets/logo/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      href: '/assets/logo/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/logo/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/assets/logo/site.webmanifest',
    },
  ],
}

export default defaultSeoConfig
