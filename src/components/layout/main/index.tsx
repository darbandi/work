import React from 'react'
import { Main } from './Main.style'

type Props = {
  children: React.JSX.Element
}

export function MainComp(props: Props): React.JSX.Element {
  return <Main>{props.children}</Main>
}
