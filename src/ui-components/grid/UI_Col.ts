import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

function getWithString(span?: number) {
  if (!span) return

  const width = (span / 12) * 100
  return `width: ${width}%;`
}

type UI_ColType = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  hideOn?: string
  width?: number
}

export const UI_Col = styled.div<UI_ColType>`
  ${({
    theme: { remCalc },
    xs,
    sm,
    md,
    lg,
    hideOn,
    width,
  }: ThemeType & UI_ColType) => css`
    float: right;

    ${xs ? getWithString(xs) : 'width: 100%;'}

    @media only screen and (min-width: 768px) {
      ${sm && getWithString(sm)}
    }
    @media only screen and (min-width: 992px) {
      ${md && getWithString(md)}
    }
    @media only screen and (min-width: 1200px) {
      ${lg && getWithString(lg)}
    }

    ${hideOn &&
    responsive(
      hideOn,
      css`
        display: none;
      `,
    )}
    ${width &&
    css`
      width: ${remCalc(width)};
    `}
  `}
`
