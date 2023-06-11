import React from 'react'
import { MainComp } from './main'
import { FooterComp } from './footer'
import { HeaderComp } from './header'

type Props = {
  children: React.JSX.Element
  RenderHeader?: React.JSX.Element | 'empty'
  RenderFooter?: React.JSX.Element | 'empty'
}

export function LayoutComp(props: Props): React.JSX.Element {
  const { RenderHeader, RenderFooter } = props

  return (
    <>
      {RenderHeader === 'empty' ? '' : RenderHeader ?? <HeaderComp />}
      <MainComp>{props.children}</MainComp>
      {RenderFooter === 'empty' ? '' : RenderFooter ?? <FooterComp />}
    </>
  )
}
