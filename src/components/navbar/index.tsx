import React from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { Icon } from '@ui'
import { useIntl } from 'react-intl'
import { A, Li, Navbar, Ul } from './Navbar.style'
import data from './data.json'
import { messages } from './messages'

export function NavbarComp(): JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Navbar>
      <Ul>
        {data.map((x) => (
          <Li key={x.id}>
            <A>
              {formatMessage(messages[x.title as keyof typeof messages])}
              {/* <Icon icon={faAngleDown} /> */}
            </A>
          </Li>
        ))}
      </Ul>
    </Navbar>
  )
}
