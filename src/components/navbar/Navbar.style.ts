import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const Navbar = styled.nav``
export const Ul = styled.ul`
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`
export const Li = styled.li``
export const A = styled.a`
  color: ${({ theme }: ThemeType) => theme.colors.gray_300};
  padding: ${({ theme }: ThemeType) => theme.remCalc(16)};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(16)};
  font-weight: bold;
`
