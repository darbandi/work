import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationSlideInTop,
  flexSpaceBetween,
  responsive,
} from '@/theme'

export const Header = styled.header`
  height: ${({ theme }: ThemeType) => theme.remCalc(57)};
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_100}15;
  ${flexSpaceBetween}
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(12)} ${theme.remCalc(16)}`};
  position: fixed;
  top: ${({ theme }: ThemeType) => theme.remCalc(50)};
  left: ${({ theme }: ThemeType) => theme.remCalc(50)};
  right: ${({ theme }: ThemeType) => theme.remCalc(50)};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  z-index: 2;
  ${animationSlideInTop}

  .fa-search {
    margin-left: ${({ theme }: ThemeType) => theme.remCalc(24)};
    cursor: pointer;
  }

  svg {
    font-size: large;
  }

  .input-search {
    height: ${({ theme }: ThemeType) => theme.remCalc(32)};
    width: ${({ theme }: ThemeType) => theme.remCalc(200)};
    margin-left: ${({ theme }: ThemeType) => theme.remCalc(8)};
    &::placeholder {
      font-weight: 300 !important;
    }

    ${animationSlideInTop}
  }

  .btn-login-register {
    height: ${({ theme }: ThemeType) => theme.remCalc(33)};
    width: ${({ theme }: ThemeType) => theme.remCalc(150)};
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
      padding: ${({ theme }: ThemeType) =>
        `${theme.remCalc(24)} ${theme.remCalc(32)}`};
      top: 0;
      height: auto;

      .input-search {
        height: ${({ theme }: ThemeType) => theme.remCalc(38)};
        width: ${({ theme }: ThemeType) => theme.remCalc(200)};
        margin-left: 0;
      }

      .btn-login-register {
        display: none;
      }

      .fa-login {
        display: block;
        margin-right: ${({ theme }: ThemeType) => theme.remCalc(32)};
      }

      svg {
        font-size: ${({ theme }: ThemeType) => theme.remCalc(28)};
      }
    `,
  )}
`
