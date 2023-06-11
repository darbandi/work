import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const Container = styled.div`
  background: ${({ theme }: ThemeType) => theme.colors.black};
  height: 100vh;
`
