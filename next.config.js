const { parsed: localEnv } = require('dotenv').config()

const withPWA = require('next-pwa')({
  dest: 'public',
  // Disable the caching of images since we use dynamic image imports
  // disable: process.env.NODE_ENV === 'development',
  // Register the ServiceWorker
  register: true,
  // Define the scope of the ServiceWorker
  skipWaiting: true,
})

const config = {
  env: {
    ...localEnv,
  },
  i18n: {
    localeDetection: false,
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
  },
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports =
  process.env.NODE_ENV === 'production' ? withPWA(config) : config
