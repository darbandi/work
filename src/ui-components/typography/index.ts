import styled from 'styled-components'
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system'

type TypoProps = SpaceProps & ColorProps & TypographyProps

export const Typography = styled.div<TypoProps>`
  ${space}
  ${typography}
  ${color}
`
