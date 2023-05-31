import React from 'react'
import { Header } from './Header.style'
import { NavbarComp } from '@/components/navbar'
import { useStore } from '@/store'

export function HeaderComp(): React.JSX.Element {
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)

  return (
    <Header>
      <NavbarComp />
      <button onClick={increment}>+</button>
      {count}
    </Header>
  )
}
