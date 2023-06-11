import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const Header = styled.header`
  height: ${({ theme }: ThemeType) => theme.remCalc(57)};
  background: ${({ theme }: ThemeType) => theme.colors.bg_dark_50};
  display: flex;
  align-items: center;
  padding: ${({ theme }: ThemeType) => theme.remCalc(12)};
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
