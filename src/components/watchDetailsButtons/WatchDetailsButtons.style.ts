import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const Actions = styled.div`
  gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
  ${flexCenter}

  ${responsive(
    'md',
    css`
      margin-top: ${({ theme }: ThemeType) => theme.remCalc(16)};
    `,
  )}
`
