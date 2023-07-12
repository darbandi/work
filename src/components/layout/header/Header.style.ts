import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationSlideInTop,
  flexSpaceBetween,
  responsive,
} from '@/theme'

export const Header = styled.header`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    height: ${remCalc(57)};
    background-color: ${colors.gray_100}15;
    ${flexSpaceBetween}
    padding: ${`${remCalc(12)} ${remCalc(16)}`};
    position: fixed;
    top: ${remCalc(50)};
    left: ${remCalc(50)};
    right: ${remCalc(50)};
    border-radius: ${remCalc(8)};
    z-index: 2;
    ${animationSlideInTop}

    .fa-search {
      margin-left: ${remCalc(24)};
      cursor: pointer;
    }

    svg {
      font-size: large;
    }

    .input-search {
      height: ${remCalc(32)};
      width: ${remCalc(200)};
      margin-left: ${remCalc(8)};
      background-color: ${colors.white};
      color: ${colors.gray_700};

      &::placeholder {
        font-weight: 300 !important;
      }

      ${animationSlideInTop}
    }

    .btn-login-register {
      height: ${remCalc(33)};
      width: 'fix-content';
    }

    .fa-login {
      display: none;
    }

    ${responsive(
      'sm',
      css`
        left: 0;
        right: 0;
        border-radius: 0;
        padding: ${`${remCalc(24)} ${remCalc(32)}`};
        top: 0;
        height: auto;

        .input-search {
          height: ${remCalc(38)};
          width: ${remCalc(200)};
          margin-left: 0;
        }

        .btn-login-register {
          display: none;
        }

        .fa-login {
          display: block;
          margin-right: ${remCalc(32)};
        }

        svg {
          font-size: ${remCalc(28)};
        }
      `,
    )}
  `}
`
