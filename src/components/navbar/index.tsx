import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@react-hooks-library/core'
import React, { useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { MegaMenu } from '../megaMenu'
import { A, Li, Navbar, Ul } from './Navbar.style'
import data from './data.json'
import { messages } from './messages'
import { Icon } from '@/ui-components'

export function NavbarComp(): React.JSX.Element {
  const { formatMessage } = useIntl()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState(false)

  const menu = useRef(null)
  const handleToggleMenu = () => setToggleMenu((x) => !x)
  useClickOutside(menu, () => {
    handleToggleMenu()
  })

  const megaMenuRef = useRef(null)
  const handleClickCategory = () => setOpenMegaMenu((x) => !x)
  useClickOutside(megaMenuRef, () => handleClickCategory())

  return (
    <Navbar>
      <Icon icon={faBars} className='fa-bars' onClick={handleToggleMenu} />
      <Ul className='desktop'>
        {data.map((x) => (
          <Li key={x.id} onClick={x.id === 3 ? handleClickCategory : undefined}>
            <A>
              {formatMessage(messages[x.title as keyof typeof messages])}
              <Icon icon={faAngleDown} />
            </A>
          </Li>
        ))}
      </Ul>
      {toggleMenu && (
        <Ul className='mobile' ref={menu}>
          {/* <Li className='mobile'>aaaaaaa</Li> */}
          {data.map((x) => (
            <Li key={x.id} className='mobile'>
              <A className='mobile'>
                {formatMessage(messages[x.title as keyof typeof messages])}
                <Icon icon={faAngleDown} className='fa-angle' rotation={90} />
              </A>
            </Li>
          ))}
        </Ul>
      )}
      <MegaMenu ref={megaMenuRef} open={openMegaMenu} />
    </Navbar>
  )
}
