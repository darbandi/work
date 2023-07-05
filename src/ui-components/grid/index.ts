import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, responsive } from '@/theme'

export const UI_Row = styled.div<{
  display?: string
  alignItems?: string
  justifyContent?: string
}>`
  width: 100%;
  ${flexAlignCenter}
  /* flex-wrap: wrap; */

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
`

function getWithString(span?: number) {
  if (!span) return

  const width = (span / 12) * 100
  return `width: ${width}%;`
}

export const UI_Col = styled.div<{
  xs?: number
  sm?: number
  md?: number
  lg?: number
  hideOn?: string
  width?: number
}>`
  float: right;

  ${({ xs }) => (xs ? getWithString(xs) : 'width: 100%;')}

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWithString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWithString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWithString(lg)}
  }

  ${({ hideOn }) =>
    hideOn &&
    responsive(
      hideOn,
      css`
        display: none;
      `,
    )}
  ${({ width }) =>
    width &&
    css`
      width: ${({ theme }: ThemeType) => theme.remCalc(width)};
    `}
`
