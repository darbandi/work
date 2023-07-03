import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const Footer = styled.footer`
  box-shadow: 0 0 3px ${({ theme }: ThemeType) => theme.colors.gray_500};
  padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(40)};

  ${responsive(
    'md',
    css`
      .footer-nav {
        flex-wrap: wrap;
        justify-content: center;
      }

      .copyright {
        flex-wrap: wrap;
        margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(32)};
        justify-content: center;
      }

      .socials {
        justify-content: center;
      }

      .logos {
        justify-content: center;
      }
    `,
  )}
`
