import React from 'react'
import { MainComp } from './main'
import { FooterComp } from './footer'
import { HeaderComp } from './header'

type Props = {
  children: React.JSX.Element
  RenderHeader?: React.JSX.Element
}

export function LayoutComp(props: Props): React.JSX.Element {
  const { RenderHeader } = props
  return (
    <>
      {RenderHeader ?? <HeaderComp />}

      <MainComp>{props.children}</MainComp>
      <FooterComp />
    </>
  )
}
