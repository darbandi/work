import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, flexSpaceBetween } from '@/theme'

export const Container = styled.div`
  padding-right: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(80)};
`
export const More = styled.div<{ mode?: 'dark' | 'light' }>`
  cursor: pointer;
  ${flexAlignCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    font-size: ${({ theme }: ThemeType) => theme.remCalc(10)};
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ${({ mode }) =>
    mode === 'light' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.white};
      .svg-inline--fa {
        color: ${({ theme }: ThemeType) => theme.colors.white};
      }
    `}
`
export const Header = styled.div`
  ${flexSpaceBetween}
  padding-left: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(12)};
`
export const Title = styled.div<{ mode?: 'dark' | 'light' }>`
  font-weight: bold;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(32)};
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-family: 'Droid';

  ${({ mode }) =>
    mode === 'light' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.white};
    `}
`
