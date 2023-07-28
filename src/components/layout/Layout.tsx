import { Main_comp } from './main/Main'
import { Footer_comp } from './footer/Footer'
import { Header_comp } from './header/Header'

type Props = {
  children: JSX.Element
  RenderHeader?: JSX.Element | 'empty'
  RenderFooter?: JSX.Element | 'empty'
}

export function Layout_comp(props: Props): JSX.Element {
  const { RenderHeader, RenderFooter } = props

  return (
    <>
      {RenderHeader === 'empty' ? '' : RenderHeader ?? <Header_comp />}
      <Main_comp>{props.children}</Main_comp>
      {RenderFooter === 'empty' ? '' : RenderFooter ?? <Footer_comp />}
    </>
  )
}
