import styled from 'styled-components'
import Link from 'next/link'
import { flexCenter, ThemeType } from '@/theme'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
`
export const MenuItems = styled.div`
  margin: 0 auto;
  ${flexCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(32)};
  padding: ${({ theme }: ThemeType) => theme.remCalc(32)};
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_100};
  white-space: nowrap;
  width: fit-content;
`

export const MenuItem = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  cursor: pointer;
`
