import styled, { css } from 'styled-components'
import { flexAlignCenter } from '@/theme'

export const UI_Row = styled.div<{
  display?: string
  alignItems?: string
  justifyContent?: string
}>`
  width: 100%;
  ${flexAlignCenter}
  /* flex-wrap: wrap; */

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
`
