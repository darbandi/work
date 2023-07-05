import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { Header } from './Header.style'
import { globalMessages } from '@/assets/globalMessages'
import { NavbarComp } from '@/components'
import { useScroll } from '@/hooks'
import { UI_Box, Icon, InputText, UI_OutlinedButton } from '@/ui-components'

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
    }
  }
  if (!isTop) return null
  return (
    <Header>
      <NavbarComp />
      <UI_Box alignItems={'center'} display={'flex'}>
        {searchActive ? (
          <InputText
            ref={searchRef}
            placeholder={formatMessage(globalMessages.search, {
              other: ' ...',
            })}
            className='input-search'
            onKeyDown={handleSearch}
          />
        ) : (
          <>
            <Icon
              icon={faSearch}
              className='fa-search'
              flip='horizontal'
              onClick={handleClickOnSearchIcon}
            />
            <UI_OutlinedButton
              onClick={handleClickLoginOrRegister}
              style={{
                height: 33,
                width: 150,
              }}
            >
              {formatMessage(globalMessages.loginRegister)}
            </UI_OutlinedButton>
          </>
        )}
      </UI_Box>
    </Header>
  )
}
