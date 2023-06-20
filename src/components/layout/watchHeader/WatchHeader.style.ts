import styled from 'styled-components'
import { ThemeType, flexAlignCenter, flexSpaceBetween } from '@/theme'

export const Header = styled.header`
  opacity: 1;
  position: fixed;
  height: ${({ theme }: ThemeType) => theme.remCalc(60)};
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: ${({ theme }: ThemeType) => theme.colors.white};
  ${flexSpaceBetween}
  padding: 0 ${({ theme }: ThemeType) => theme.remCalc(24)};
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const Back = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  ${flexSpaceBetween}
  gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
  cursor: pointer;
`

export const Main = styled.div`
  cursor: pointer;
  ${flexAlignCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(16)};
`
