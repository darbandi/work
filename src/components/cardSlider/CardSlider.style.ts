import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, flexSpaceBetween } from '@/theme'

export const Container = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    padding-right: ${remCalc(50)};
    margin-top: ${remCalc(80)};
  `}
`
export const More = styled.div`
  ${({ theme: { colors, remCalc }, mode }: ThemeType) => css`
    cursor: pointer;
    ${flexAlignCenter}
    gap: ${remCalc(8)};
    color: ${colors.gray_700};

    .svg-inline--fa {
      color: ${colors.gray_700};
      font-size: ${remCalc(10)};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ${mode === 'light' &&
    css`
      color: ${colors.white};

      .svg-inline--fa {
        color: ${colors.white};
      }
    `}
  `}
`
export const Header = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexSpaceBetween}
    padding-left: ${remCalc(50)};
    margin-bottom: ${remCalc(12)};
  `}
`
export const Title = styled.div`
  ${({ theme: { colors, remCalc }, mode }: ThemeType) => css`
    font-weight: bold;
    font-size: ${remCalc(32)};
    color: ${colors.gray_800};
    font-family: 'Droid';

    ${mode === 'light' &&
    css`
      color: ${colors.white};
    `}
  `}
`
