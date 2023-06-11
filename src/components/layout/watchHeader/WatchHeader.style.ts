import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const Header = styled.header`
  background-color: ${({ theme }: ThemeType) => theme.colors.black};
  opacity: 0;
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: ${({ theme }: ThemeType) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const Back = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
`

export const Main = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
`
