import {
  faAngleDown,
  faAngleUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import React, { useId, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { MegaMenu } from '../megaMenu'
import { A, Li, Navbar, Ul } from './Navbar.style'
import data from './data.json'
import { messages } from './messages'
import { Icon } from '@/ui-components'

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

export function NavbarComp(): React.JSX.Element {
  const { formatMessage } = useIntl()
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

  return (
    <Navbar>
      <Icon icon={faBars} className='fa-bars' onClick={handleToggleMenu} />
      <Ul className='desktop'>
        {data.map((x: IDataMenu) => (
          <Li key={`${uId}-${x.id}`}>
            {/* x.id === 3 ? handleClickMenu : undefined */}
            <A
              active={(x.id === active).toString()}
              href={x.link || ''}
              onClick={() => x.subMenu && handleClickMenu(x.id)}
            >
              {formatMessage(messages[x.title as keyof typeof messages])}
              {x.subMenu && (
                <Icon icon={x.id === active ? faAngleUp : faAngleDown} />
              )}
            </A>

            {x.subMenu && (
              <MegaMenu
                ref={megaMenuRef}
                isOpen={x.id === active}
                data={x.subMenu}
                onClick={handleClickMenu}
              />
            )}
          </Li>
        ))}
      </Ul>
      {toggleMenu && (
        <Ul className='mobile' ref={menu}>
          {/* <Li className='mobile'>aaaaaaa</Li> */}
          {data.map((x) => (
            <Li key={`${uId2}-${x.id}`} className='mobile'>
              <A
                className='mobile'
                href={x.link || ''}
                active={(x.id === active).toString()}
              >
                {formatMessage(messages[x.title as keyof typeof messages])}
                <Icon icon={faAngleDown} className='fa-angle' rotation={90} />
              </A>
            </Li>
          ))}
        </Ul>
      )}
    </Navbar>
  )
}
