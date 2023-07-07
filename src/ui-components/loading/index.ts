import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

type UI_LoadingType = {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}

export const UI_Loading = styled.div<UI_LoadingType>`
  ${({ theme: { remCalc }, xs, sm, md, lg }: ThemeType & UI_LoadingType) => css`
    border: ${remCalc(5)} solid #f3f3f3;
    border-top: ${remCalc(5)} solid #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite;
    ${flexCenter}

    ${xs
      ? css`
          width: ${remCalc(40)};
          height: ${remCalc(40)};
        `
      : css`
          width: ${remCalc(100)};
          height: ${remCalc(100)};
        `}

  ${sm &&
    css`
      width: ${remCalc(60)};
      height: ${remCalc(60)};
    `}

    ${md &&
    css`
      width: ${remCalc(80)};
      height: ${remCalc(80)};
    `}
  
    ${lg &&
    css`
      width: ${remCalc(100)};
      height: ${remCalc(100)};
    `}

  @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
