import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "@/styles/breakpoints.scss";
    `,
  },

  images: {
    deviceSizes: [768, 1024, 3840],
    imageSizes: [32, 128, 384],
    minimumCacheTTL: 60,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: ',
    //   },
    // ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },

  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*',
      },
    ]
  },
}

export default withNextIntl(nextConfig)
