import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { IntlProvider, createIntl, createIntlCache } from 'react-intl'
import { dark, light } from '../theme/Theme.styled'
import { GlobalStyles } from '../theme/Global.styled'
import en from './../../public/locales/en/common.json'
import fa from './../../public/locales/fa/common.json'
import { LayoutComp } from '@/components'
import StoreProvider from '@/store/StoreProvider'

const cache = createIntlCache()
const messages = { fa, en }
const themes = { dark, light }

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const themeMode = 'dark'
  const { locale: nextLocale = 'en' } = useRouter()
  const intl = createIntl(
    {
      locale: nextLocale,
      messages: messages[nextLocale as keyof typeof messages],
    },
    cache,
  )
  return (
    <StoreProvider {...pageProps.initialZustandState}>
      <IntlProvider {...intl} onError={() => null}>
        <ThemeProvider theme={themes[themeMode as keyof typeof themes]}>
          <GlobalStyles />
          <LayoutComp>
            <Component {...pageProps} />
          </LayoutComp>
        </ThemeProvider>
      </IntlProvider>
    </StoreProvider>
  )
}
