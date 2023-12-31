const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'localhost', 'github.com'],
    formats: ['image/avif', 'image/webp'],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]!static',
        },
      },
    })
    config.module.rules.push({
      test: /\.(mp3)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    })
    return config
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
