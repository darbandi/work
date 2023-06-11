# Dynamic Import (SSR)

```js
const MainSSR = dynamic(
  async () => (await import('@/containers/main/MainNoSSR')).Main,
  {
    ssr: true,
  },
)
```

# Dynamic Import (No SSR)

```js
const MainNoSSR = dynamic(
  async () => (await import('@/containers/main/MainNoSSR')).Main,
  {
    ssr: false, // boolean: true | false
  },
)
```

# Pages

```js
import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import { ssrConfig } from '@/lib'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/main/MainNoSSR')).Main,
  {
    ssr: true,
  },
)

const Index: NextPage = function Index() {
  return <MainNoSSR />
}

export const getServerSideProps = ssrConfig
export default Index
```

# Component

```js
import React from 'react'
import type { NextPage } from 'next'
import type { MainProps } from '@/types'

export const Main: NextPage<MainProps> = function Main() {
  return <div className='container'>test</div>
}
```

# SSR Config

```js
import { ssrConfig } from '@/lib'

export const getServerSideProps = ssrConfig
```

# Authenticate Page

```js
Index.auth = true
```

# Global State [Link](https://docs.pmnd.rs/zustand)

```js
import { useStore } from '@/store'

const signOut = useStore((store) => store.signOut)
```

# User Session [Link](https://next-auth.js.org/getting-started/example)

```js
import { useSession } from 'next-auth/react'

const { data: session } = useSession()

// session?.user?.name
```

# Router

```js
import { useRouter } from 'next/router'

const { push, locale: nextLocale, pathname, query, asPath } = useRouter()

push({ pathname, query }, asPath, {
  locale: nextLocale === 'fa' ? 'en' : 'fa',
})
```

# Messages Page

```js
import { defineMessages } from 'react-intl'

const scope = 'apps.web'

export const messages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'تست',
  },
})
```

# Translate [Link](https://formatjs.io/docs/react-intl/)

```js
import { useIntl } from 'react-intl'
import { messages } from './messages'

// in logic
const { formatMessage } = useIntl()

// in JSX
{
  formatMessage(messages.title)
}
```

# Styled Components [Link](https://styled-components.com/)

```js
import * as theme from '@/theme'
import styled from 'styled-components'

export const Header = styled.header`
  background: ${({ theme }: ThemeType) => theme.colors.bg_dark_50};
  // OR
  background: ${theme.dark.colors.bg_dark_50};

  // PX to REM
  font-size: ${theme.remCalc(12)};
`
```

# Dynamic Props

```js
export const Header =
  styled.header <
  { isOnScreen: boolean } >
  `
// some style

  ${(props) =>
    props.isOnScreen &&
    css`
      // some style
    `}
`
```

# Alias Import

```js
@/ui-components
@/containers
@/components
@/controllers
@/store
@/tools
@/models
@/lib
@/locales
@/controllers
@/theme
@/models
@/types
```

# Display Object In JSX

```js
import { ObjectInJSX } from '@ui';
<ObjectInJSX obj={} />
```

# Icons [Link](https://fontawesome.com/v5/docs/web/use-with/react)

```js
import { Icon } from '@ui'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
;<Icon icon={faCoffee} />
```

# Motion [Link](https://github.com/chenglou/react-motion)

```js
import { Motion, spring } from 'react-motion'

<Motion defaultStyle={{ width: -150 }} style={{ width: spring(0) }}>
  {(interpolatingStyle) => (

  )}
</Motion>
```

# [Carousel](https://maxmarinich.github.io/react-alice-carousel/)
