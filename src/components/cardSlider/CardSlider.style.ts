import styled from 'styled-components'
import { ThemeType, flexSB } from '@/theme'

export const More = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
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
`
export const Header = styled.div`
  ${flexSB}
  padding-left: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(12)};
`
export const Title = styled.div`
  font-weight: bold;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(32)};
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-family: 'Droid';
`
export const Container = styled.div`
  padding-right: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(80)};
`
