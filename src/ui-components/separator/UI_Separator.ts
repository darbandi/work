import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const UI_Separator = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.gray_400};
    width: 2px;
    height: ${remCalc(16)};
  `}
`
