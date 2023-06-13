import styled from 'styled-components'
import { ThemeType, flexSB } from '@/theme'

export const Header = styled.header`
  background-color: ${({ theme }: ThemeType) => theme.colors.black};
  opacity: 0;
  position: fixed;
  height: ${({ theme }: ThemeType) => theme.remCalc(60)};
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: ${({ theme }: ThemeType) => theme.colors.white};
  ${flexSB}
  padding: 0 ${({ theme }: ThemeType) => theme.remCalc(24)};
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const Back = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  ${flexSB}
  gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
  cursor: pointer;
`

export const Main = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }: ThemeType) => theme.remCalc(16)};
`
