import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const Actions = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    gap: ${remCalc(8)};
    ${flexCenter}

    ${responsive(
      'md',
      css`
        margin-top: ${remCalc(16)};
      `,
    )}
  `}
`
