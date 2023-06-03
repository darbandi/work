import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { IntlProvider, createIntl, createIntlCache } from 'react-intl'
import { SessionProvider } from 'next-auth/react'
import { dark, light } from '@/theme/Theme.styled'
import { GlobalStyles } from '@/theme/Global.styled'
import en from '@/locales/en/common.json'
import fa from '@/locales/fa/common.json'
import { LayoutComp } from '@/components'
import { StoreProvider } from '@/store'
import { Auth } from '@/tools'

const cache = createIntlCache()
const messages = { fa, en }
const themes = { dark, light }

type AppType = AppProps & { Component: { auth: boolean } }

export default function App({
  Component,
  pageProps: { session, ...otherProps },
}: AppType): React.JSX.Element {
  const themeMode = 'dark'
  const { locale: nextLocale = 'en' } = useRouter()
  const intl = createIntl(
    {
      locale: nextLocale,
      messages: messages[nextLocale as keyof typeof messages],
    },
    cache,
  )

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <SessionProvider session={session}>
      <StoreProvider {...otherProps.initialZustandState}>
        <IntlProvider {...intl} onError={() => null}>
          <ThemeProvider theme={themes[themeMode as keyof typeof themes]}>
            <GlobalStyles />
            <LayoutComp>
              {Component.auth ? (
                <Auth>
                  <Component {...otherProps} />
                </Auth>
              ) : (
                <Component {...otherProps} />
              )}
            </LayoutComp>
          </ThemeProvider>
        </IntlProvider>
      </StoreProvider>
    </SessionProvider>
  )
}
