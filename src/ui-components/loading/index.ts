import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

export const UI_Loading = styled.div<{
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}>`
  border: ${({ theme }: ThemeType) => theme.remCalc(5)} solid #f3f3f3;
  border-top: ${({ theme }: ThemeType) => theme.remCalc(5)} solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  ${flexCenter}

  ${({ xs, theme }) =>
    xs
      ? css`
          width: ${theme.remCalc(40)};
          height: ${theme.remCalc(40)};
        `
      : css`
          width: ${theme.remCalc(100)};
          height: ${theme.remCalc(100)};
        `}

  ${({ sm, theme }) =>
    sm &&
    css`
      width: ${theme.remCalc(60)};
      height: ${theme.remCalc(60)};
    `}

    ${({ md, theme }) =>
    md &&
    css`
      width: ${theme.remCalc(80)};
      height: ${theme.remCalc(80)};
    `}
  
    ${({ lg, theme }) =>
    lg &&
    css`
      width: ${theme.remCalc(100)};
      height: ${theme.remCalc(100)};
    `}
  

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
