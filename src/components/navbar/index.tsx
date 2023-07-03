import {
  faAngleDown,
  faAngleUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import React, { useId, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { MegaMenu } from '../megaMenu'
import { HyperLink, FunctionLink, Li, Navbar, Ul } from './Navbar.style'
import data from './data.json'
import { messages } from './messages'
import { Icon, Text } from '@/ui-components'

export interface ISubMenu {
  id: number
  title: string
}

export interface IDataMenu {
  id: number
  title: string
  link?: string
  subMenu?: ISubMenu[]
}

export function NavbarComp(): JSX.Element {
  const { formatMessage } = useIntl()
  const { asPath } = useRouter()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [active, setActive] = useState<number>(0)
  const uId = useId()
  const uId2 = useId()

  const menu = useRef(null)
  const handleToggleMenu = () => setToggleMenu((x) => !x)
  useClickOutside(menu, () => {
    handleToggleMenu()
  })

  const megaMenuRef = useRef(null)
  const handleClickMenu = (id?: number) => {
    if (id) {
      setActive(id)
    }
  }
  useClickOutside(megaMenuRef, () => handleClickMenu(-1))

  const createMenu = (menu: IDataMenu) => {
    return (
      <>
        <Text size={16}>
          {formatMessage(messages[menu.title as keyof typeof messages])}
        </Text>
        {menu.subMenu && (
          <Icon icon={menu.id === active ? faAngleUp : faAngleDown} />
        )}
      </>
    )
  }

  return (
    <Navbar>
      <Icon icon={faBars} className='fa-bars' onClick={handleToggleMenu} />
      {toggleMenu ? (
        <Ul className='mobile' ref={menu}>
          {data.map((menu) => (
            <Li
              key={`${uId2}-${menu.id}`}
              className='mobile'
              onClick={handleToggleMenu}
            >
              <HyperLink
                className='mobile'
                href={menu.link || ''}
                active={menu.id === active}
              >
                <Text size={18} fontWeight='bold' color='gray_700'>
                  {formatMessage(messages[menu.title as keyof typeof messages])}
                </Text>
                <Icon icon={faAngleDown} className='fa-angle' rotation={90} />
              </HyperLink>
            </Li>
          ))}
        </Ul>
      ) : (
        <Ul className='desktop'>
          {data.map((menu: IDataMenu) => (
            <Li key={`${uId}-${menu.id}`}>
              {menu.subMenu ? (
                <FunctionLink
                  active={(menu.id === active).toString()}
                  onClick={() => menu.subMenu && handleClickMenu(menu.id)}
                >
                  {createMenu(menu)}
                </FunctionLink>
              ) : (
                <HyperLink active={asPath === menu.link} href={menu.link || ''}>
                  {createMenu(menu)}
                </HyperLink>
              )}

              {menu.subMenu && (
                <MegaMenu
                  ref={megaMenuRef}
                  isOpen={menu.id === active}
                  data={menu.subMenu}
                  onClick={handleClickMenu}
                />
              )}
            </Li>
          ))}
        </Ul>
      )}
    </Navbar>
  )
}
