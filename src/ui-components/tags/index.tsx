import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const H1 = styled.h1`
  font-size: ${({ theme }: ThemeType) => theme.remCalc(48)};
  font-weight: 700;
`
export const H2 = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(36)};
`
export const H3 = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(32)};
`
export const H4 = styled.h4`
  font-weight: 400;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(24)};
`
export const Span = styled.span`
  font-weight: 400;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(14)};
`
export const Label = styled.label`
  font-weight: 400;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(12)};
`
