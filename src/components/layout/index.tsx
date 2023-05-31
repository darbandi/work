import React from 'react'
import { MainComp } from './main'
import { FooterComp } from './footer'
import { HeaderComp } from './header'

type Props = {
  children: React.JSX.Element
}

export function LayoutComp(props: Props): React.JSX.Element {
  return (
    <>
      <HeaderComp />
      <MainComp>{props.children}</MainComp>
      <FooterComp />
    </>
  )
}
