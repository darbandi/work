import React from 'react'
import { Motion, spring } from 'react-motion'
import { Header } from './Header.style'
import { NavbarComp } from '@/components/navbar'
import { useScroll } from '@/hooks'

export function HeaderComp(): React.JSX.Element {
  const { isTop } = useScroll('body')
  return (
    <Motion style={{ opacity: spring(isTop ? 1 : 0) }}>
      {(interpolatingStyle) => (
        <Header style={interpolatingStyle} id='header'>
          <NavbarComp />
        </Header>
      )}
    </Motion>
  )
}
