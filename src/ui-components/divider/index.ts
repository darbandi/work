import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const UI_Divider = styled.hr`
  ${({ theme: { colors } }: ThemeType) => css`
    border: none;
    border-bottom: 1px solid ${colors.gray_500};
    width: 100%;
  `}
`
