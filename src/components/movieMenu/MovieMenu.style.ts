import styled from 'styled-components'
import Link from 'next/link'
import { flexCenter, ThemeType } from '@/theme'

export const Container = styled.div`
  ${flexCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(32)};
  padding: ${({ theme }: ThemeType) => theme.remCalc(32)};
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_100};
`

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  cursor: pointer;
`
