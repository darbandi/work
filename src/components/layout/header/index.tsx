import {
  faArrowRightToBracket,
  faSearch,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { Header } from './Header.style'
import {
  UI_Box,
  UI_Button,
  UI_Icon,
  UI_InputText,
  UI_Text,
} from '@/ui-components'
import { inputTextType } from '@/types/elements'
import { useStore } from '@/store'
import { useScroll } from '@/hooks'
import { NavbarComp } from '@/components'
import { globalMessages } from '@/assets/globalMessages'

export function HeaderComp(): JSX.Element | null {
  const { data } = useSession()
  const { push } = useRouter()
  const { isTop } = useScroll('body')
  const { formatMessage } = useIntl()
  const [isSearchMode, setIsSearchMode] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  useClickOutside(searchRef, () => setIsSearchMode(false))
  const setCurrentUser = useStore((user) => user.setCurrentUser)

  const handleClickLoginOrRegister = () => {
    push('/login', undefined, { shallow: true })
  }

  const handleLogout = () => {
    setCurrentUser?.(undefined)
    signOut({
      callbackUrl: '/login',
      redirect: true,
    })
  }

  const handleClickOnSearchIcon = () => {
    setIsSearchMode(true)
  }

  useEffect(() => {
    if (isSearchMode) {
      searchRef.current?.focus()
    }
  }, [isSearchMode])

  const handleSearch = (e: inputTextType) => {
    if (e.key === 'Enter') {
      push(`/search/?q=${searchRef.current?.value}`)
      setIsSearchMode(false)
    }
  }

  if (!isTop) return null
  return (
    <Header>
      <NavbarComp />
      <UI_Box alignItems='center' display='flex'>
        {isSearchMode ? (
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
            {data?.user?.name ? (
              <UI_Icon
                icon={faSignOut}
                className='fa-login'
                onClick={handleClickLoginOrRegister}
              />
            ) : (
              <UI_Icon
                icon={faArrowRightToBracket}
                className='fa-login'
                onClick={handleClickLoginOrRegister}
              />
            )}

            {data?.user?.name ? (
              <UI_Button
                variant='outlined'
                color='gray_100'
                className='btn-login-register'
                onClick={handleLogout}
              >
                {/* {user.userName || user.mobile} */}
                <UI_Text>{data?.user?.name}</UI_Text>
                <UI_Icon icon={faSignOut} />
              </UI_Button>
            ) : (
              <UI_Button
                variant='outlined'
                color='gray_100'
                className='btn-login-register'
                onClick={handleClickLoginOrRegister}
              >
                {formatMessage(globalMessages.loginRegister)}
              </UI_Button>
            )}
          </>
        )}
      </UI_Box>
    </Header>
  )
}
