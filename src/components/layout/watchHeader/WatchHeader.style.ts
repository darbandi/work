import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, flexSpaceBetween } from '@/theme'

export const Header = styled.header`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    opacity: 1;
    position: fixed;
    height: ${remCalc(60)};
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    color: ${colors.white};
    ${flexSpaceBetween}
    padding: 0 ${remCalc(24)};
    transition: all 0.3s;

    &:hover {
      opacity: 1;
    }
  `}
`

export const Back = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.white};
    ${flexSpaceBetween}
    gap: ${remCalc(8)};
    cursor: pointer;
  `}
`

export const Main = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    cursor: pointer;
    ${flexAlignCenter}
    gap: ${remCalc(16)};
  `}
`
