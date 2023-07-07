import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors } }: ThemeType) => css`
    background: ${colors.black};
    height: 100vh;
  `}
`
