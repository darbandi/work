import React from 'react'
import { useIntl } from 'react-intl'
import Head from 'next/head'
import { globalMessages } from '@/assets/globalMessages'

type SEOGeneratorProps = {
  title?: keyof typeof globalMessages
  description?: keyof typeof globalMessages
  image?: string
  url?: string
  keywords?: keyof typeof globalMessages
  children?: React.JSX.Element
}

export function SEOGenerator(props: SEOGeneratorProps): React.JSX.Element {
  const { title, description, image, keywords, url, children } = props
  const { formatMessage } = useIntl()

  const messageGenerator = (text: string) =>
    formatMessage(globalMessages[text as keyof typeof globalMessages])

  return (
    <Head>
      {title && (
        <>
          <title>{messageGenerator(title)}</title>
          <meta name='og:title' content={messageGenerator(title)} />
          <meta property='twitter:title' content={messageGenerator(title)} />
        </>
      )}
      <meta property='og:type' content='website' />
      {description && (
        <>
          <meta name='description' content={messageGenerator(description)} />
          <meta name='og:description' content={messageGenerator(description)} />
          <meta
            property='twitter:description'
            content={messageGenerator(description)}
          />
        </>
      )}
      {keywords && (
        <meta name='keywords' content={messageGenerator(keywords)} />
      )}
      {image && (
        <>
          <meta name='og:image' content={image} />
          <meta property='twitter:card' content={image} />
          <meta property='twitter:image' content={image} />
        </>
      )}
      {url && (
        <>
          <meta name='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      {children}
    </Head>
  )
}
