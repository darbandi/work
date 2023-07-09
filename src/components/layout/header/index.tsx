import {
  faArrowRightToBracket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { Header } from './Header.style'
import { globalMessages } from '@/assets/globalMessages'
import { NavbarComp } from '@/components'
import { useScroll } from '@/hooks'
import {
  UI_Box,
  UI_Icon,
  UI_InputText,
  UI_OutlinedButton,
} from '@/ui-components'

export function HeaderComp(): JSX.Element | null {
  const { push } = useRouter()
  const { isTop } = useScroll('body')
  const { formatMessage } = useIntl()
  const [searchActive, setSearchActive] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  useClickOutside(searchRef, () => setSearchActive(false))

  const handleClickLoginOrRegister = () => {
    push('/login')
  }

  const handleClickOnSearchIcon = () => {
    setSearchActive(true)
  }

  useEffect(() => {
    if (searchActive) {
      searchRef.current?.focus()
    }
  }, [searchActive])

  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      push(`/search/?q=${searchRef.current?.value}`)
      setSearchActive(false)
    }
  }
  if (!isTop) return null
  return (
    <Header>
      <NavbarComp />
      <UI_Box alignItems='center' display='flex'>
        {searchActive ? (
          <UI_InputText
            ref={searchRef}
            rounded
            mode='light'
            placeholder={formatMessage(globalMessages.search, {
              other: ' ...',
            })}
            className='input-search'
            onKeyDown={handleSearch}
          />
        ) : (
          <>
            <UI_Icon
              icon={faSearch}
              className='fa-search'
              flip='horizontal'
              onClick={handleClickOnSearchIcon}
            />
            <UI_Icon
              icon={faArrowRightToBracket}
              className='fa-login'
              onClick={handleClickLoginOrRegister}
            />
            <UI_OutlinedButton
              variant='light'
              className='btn-login-register'
              onClick={handleClickLoginOrRegister}
            >
              {formatMessage(globalMessages.loginRegister)}
            </UI_OutlinedButton>
          </>
        )}
      </UI_Box>
    </Header>
  )
}
