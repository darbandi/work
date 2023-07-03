import React from 'react'
import { Main } from './Main.style'

type Props = {
  children: JSX.Element
}

export function MainComp(props: Props): JSX.Element {
  return <Main>{props.children}</Main>
}
