import type { Metadata, Viewport } from 'next'

// initial metadata
export const initialMetadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: {
    default: 'Maximum',
    template: '%s | Maximum',
  },
  description: 'Maximum',
  keywords: ['Maximum'],
  applicationName: 'Maximum',
  openGraph: {
    title: {
      default: 'Maximum',
      template: '%s | Maximum',
    },
    description: 'Maximum',
    siteName: 'Maximum',
    locale: 'uk',
    images: '/logo.png',
    type: 'website',
  },
}

// initial viewport
export const initialViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff',
}
