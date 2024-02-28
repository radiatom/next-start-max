import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { FC, ReactNode } from 'react'

import { mainFont } from '@/fonts'
import { initialMetadata, initialViewport } from '@/metadata'
import { ApolloClient } from '@/packages/apollo'
import { ThemeRegistry } from '@/packages/material-ui'

import '@/styles/globals.scss'

interface IRootLayout {
  params: { locale: string }
  children: ReactNode
}

// metadata
export const metadata: Metadata = initialMetadata
export const viewport: Viewport = initialViewport

// component
const RootLayout: FC<Readonly<IRootLayout>> = ({ params, children }) => {
  const messages = useMessages()

  // return
  return (
    <html lang={params.locale} className={mainFont.className}>
      <ThemeRegistry>
        <ApolloClient>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <body>{children}</body>
          </NextIntlClientProvider>
        </ApolloClient>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout
