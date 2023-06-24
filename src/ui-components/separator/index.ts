import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const Separator = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_400};
  width: 2px;
  height: ${({ theme }: ThemeType) => theme.remCalc(16)};
`
