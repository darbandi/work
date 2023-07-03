import styled, { css } from 'styled-components'
import {
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  BackgroundColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system'

type BoxProps = BackgroundColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps & {
    gap?: number
  }

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${({ gap, theme }) =>
    gap &&
    css`
      gap: ${theme.remCalc(gap)};
    `}
`
