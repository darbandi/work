import styled, { css } from 'styled-components'
import { ThemeType, responsive, animationSlideInRight, flexSB } from '@/theme'

export const Navbar = styled.nav`
  .fa-bars {
    display: none;
  }
  ${responsive(
    'sm',
    css`
      padding-inline-start: ${({ theme }: ThemeType) => theme.remCalc(24)};
      .fa-bars {
        display: block;
        font-size: large;
      }
    `,
  )}
`
export const Ul = styled.ul`
  margin: 0;
  list-style-type: none;
  list-style: none;
  &.desktop {
    display: flex;
    align-items: center;
    padding: 0;

    ${responsive(
      'sm',
      css`
        display: none;
      `,
    )}
  }

  &.mobile {
    padding: ${({ theme }: ThemeType) => theme.remCalc(18)};
    display: flex;
    align-items: start;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${({ theme }: ThemeType) => theme.remCalc(300)};
    background-color: ${({ theme }: ThemeType) => theme.colors.gray_100};
    box-shadow: 0 0
      ${({ theme }: ThemeType) => `${theme.remCalc(80)} ${theme.colors.black}`};

    .fa-angle {
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    }

    ${animationSlideInRight}
  }
`
export const Li = styled.li`
  &.mobile {
    padding: ${({ theme }: ThemeType) => theme.remCalc(18)} 0;
    width: 100%;
  }
`
export const A = styled.a`
  color: ${({ theme }: ThemeType) => theme.colors.gray_300};
  padding: ${({ theme }: ThemeType) => theme.remCalc(16)};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(16)};
  font-weight: bold;

  &.mobile {
    ${flexSB}
    width: 100%;
    padding: 0;
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  }
`
