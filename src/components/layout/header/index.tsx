import React, { useRef, useState } from 'react'
import { Motion, spring } from 'react-motion'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Header } from './Header.style'
import { NavbarComp } from '@/components/navbar'
import { useScroll } from '@/hooks'
import { Box, Icon, InputText, OutlinedButton } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'
import { MotionComp, MotionCompEnum } from '@/components/motion'

export function HeaderComp(): React.JSX.Element {
  const { push } = useRouter()
  const { isTop } = useScroll('body')
  const { formatMessage } = useIntl()
  const [searchActive, setSearchActive] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const handleClickLoginOrRegister = () => {
    push('/login')
  }

  const handleClickOnSearchIcon = () => {
    setSearchActive(true)
    searchRef.current?.focus()
  }

  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      push(`/search/?q=${searchRef.current?.value}`)
    }
  }

  return (
    <Motion style={{ opacity: spring(isTop ? 1 : 0) }}>
      {(interpolatingStyle) => (
        <Header style={interpolatingStyle}>
          <NavbarComp />
          <Box alignItems={'center'} display={'flex'}>
            <MotionComp
              type={MotionCompEnum.openFromRight}
              active={searchActive}
            >
              <InputText
                ref={searchRef}
                placeholder={formatMessage(globalMessages.search, {
                  other: ' ...',
                })}
                style={{
                  height: 33,
                  width: 200,
                  marginLeft: 8,
                }}
                onKeyDown={handleSearch}
              />
            </MotionComp>
            {!searchActive && (
              <Icon
                icon={faSearch}
                flip='horizontal'
                style={{ marginLeft: 8, cursor: 'pointer' }}
                onClick={handleClickOnSearchIcon}
              />
            )}
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
