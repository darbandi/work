import styled, { css } from 'styled-components'
import {
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

type UI_BoxProps = BackgroundColorProps &
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

export const UI_Box = styled.div<UI_BoxProps>`
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${({ gap, theme, m, mb, mt, ml, mr, p, pb, pt, pl, pr }) =>
    css`
      ${gap &&
      css`
        gap: ${theme.remCalc(gap)};
      `}
      ${m &&
      css`
        margin: ${theme.remCalc(m)};
      `}
      ${mb &&
      css`
        margin-bottom: ${theme.remCalc(mb)};
      `}
      ${mt &&
      css`
        margin-top: ${theme.remCalc(mt)};
      `}
      ${ml &&
      css`
        margin-left: ${theme.remCalc(ml)};
      `}
      ${mr &&
      css`
        margin-right: ${theme.remCalc(mr)};
      `}
      ${p &&
      css`
        padding: ${theme.remCalc(p)};
      `}
      ${pb &&
      css`
        padding-bottom: ${theme.remCalc(pb)};
      `}
      ${pt &&
      css`
        padding-top: ${theme.remCalc(pt)};
      `}
      ${pl &&
      css`
        padding-left: ${theme.remCalc(pl)};
      `}
      ${pr &&
      css`
        padding-right: ${theme.remCalc(pr)};
      `}
    `}
`
