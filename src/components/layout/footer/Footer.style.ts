import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const Footer = styled.footer`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    box-shadow: 0 0 3px ${colors.gray_700};
    background-color: ${colors.darkBlue_900};
    padding: ${remCalc(50)};
    margin-top: ${remCalc(40)};

    ${responsive(
      'md',
      css`
        .footer-nav {
          flex-wrap: wrap;
          justify-content: center;
        }

        .copyright {
          flex-wrap: wrap;
          margin-bottom: ${remCalc(32)};
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
  `}
`
