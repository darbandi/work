import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    const sheet = new ServerStyleSheet()

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = sheet.getStyleElement()

    return { ...initialProps, styles }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta property='og:site_name' content='work' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icons/icon-72x72.png' />
          <link
            rel='icon'
            type='image/png'
            sizes='48x48'
            href='/icons/icon-48x48.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='72x72'
            href='/icons/icon-72x72.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/icons/icon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='128x128'
            href='/icons/icon-128x128.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='144x144'
            href='/icons/icon-144x144.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='152x152'
            href='/icons/icon-152x152.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/icons/icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='384x384'
            href='/icons/icon-384x384.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='512x512'
            href='/icons/icon-512x512.png'
          />
          <meta name='theme-color' content='#fff' />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
