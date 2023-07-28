import { Main } from './Main.style'

type Props = {
  children: JSX.Element
}

export function Main_comp(props: Props): JSX.Element {
  return <Main>{props.children}</Main>
}
