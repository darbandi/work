import React from 'react'
import { MainComp } from './main'
import { FooterComp } from './footer'
import { HeaderComp } from './header'

type Props = {
  children: JSX.Element
  RenderHeader?: JSX.Element | 'empty'
  RenderFooter?: JSX.Element | 'empty'
}

export function LayoutComp(props: Props): JSX.Element {
  const { RenderHeader, RenderFooter } = props

  return (
    <>
      {RenderHeader === 'empty' ? '' : RenderHeader ?? <HeaderComp />}
      <MainComp>{props.children}</MainComp>
      {RenderFooter === 'empty' ? '' : RenderFooter ?? <FooterComp />}
    </>
  )
}
