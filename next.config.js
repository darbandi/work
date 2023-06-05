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
  }
  return nextConfig
}
