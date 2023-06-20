const { parsed: localEnv } = require('dotenv').config()

module.exports = () => {
  const nextConfig = {
    env: {
      ...localEnv,
    },
    i18n: {
      localeDetection: false,
      locales: ['fa', 'en'],
      defaultLocale: 'fa',
    },
    trailingSlash: true,
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
  return nextConfig
}
