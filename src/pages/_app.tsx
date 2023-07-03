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
import '@/public/fonts/fonts.css'

const cache = createIntlCache()
const messages = { fa, en }
const themes = { dark, light }

type AppType = AppProps & {
  Component: {
    auth?: boolean
    header?: JSX.Element | 'empty'
    footer?: JSX.Element | 'empty'
  }
}

export default function App(props: AppType): JSX.Element {
  const {
    Component,
    pageProps: { session, ...otherProps },
  } = props
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
            <LayoutComp
              RenderHeader={Component.header}
              RenderFooter={Component.footer}
            >
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
