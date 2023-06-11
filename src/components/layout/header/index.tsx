import React from 'react'
import { Motion, spring } from 'react-motion'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Header } from './Header.style'
import { NavbarComp } from '@/components/navbar'
import { useScroll } from '@/hooks'
import { Box, InputText, OutlinedButton } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

export function HeaderComp(): React.JSX.Element {
  const { push } = useRouter()
  const { isTop } = useScroll('body')
  const { formatMessage } = useIntl()

  const handleClickLoginOrRegister = () => {
    push('/login')
  }

  return (
    <Motion style={{ opacity: spring(isTop ? 1 : 0) }}>
      {(interpolatingStyle) => (
        <Header style={interpolatingStyle}>
          <NavbarComp />
          <Box alignItems={'center'} display={'flex'}>
            <InputText
              placeholder={formatMessage(globalMessages.search, {
                other: ' ...',
              })}
              style={{
                height: 33,
                width: 200,
                marginLeft: 8,
              }}
            />
            <OutlinedButton
              onClick={handleClickLoginOrRegister}
              style={{
                height: 33,
                width: 150,
              }}
            >
              {formatMessage(globalMessages.loginRegister)}
            </OutlinedButton>
          </Box>
        </Header>
      )}
    </Motion>
  )
}
