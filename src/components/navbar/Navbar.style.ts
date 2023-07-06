import styled, { css } from 'styled-components'
import {
  ThemeType,
  responsive,
  animationSlideInRight,
  flexSpaceBetween,
  animationFadeIn,
  flexAlignCenter,
} from '@/theme'
import { UI_Link } from '@/ui-components'

export const Navbar = styled.nav`
  .fa-bars {
    display: none;
  }
  ${responsive(
    'sm',
    css`
      .fa-bars {
        display: block;
        font-size: ${({ theme }: ThemeType) => theme.remCalc(28)};
      }
    `,
  )}
`
export const Ul = styled.ul`
  margin: 0;
  list-style-type: none;
  list-style: none;

  .fa-angle {
    font-size: 12px;
  }

  &.desktop {
    ${flexAlignCenter}
    gap: ${({ theme }: ThemeType) => theme.remCalc(18)};
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

    padding-top: ${({ theme }: ThemeType) => theme.remCalc(48)};
    .fa-angle {
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
      font-size: 12px;
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
const commonMenuItem = css`
  color: ${({ theme }: ThemeType) => theme.colors.gray_300};
  padding: ${({ theme }: ThemeType) => theme.remCalc(16)};
  cursor: pointer;
  ${flexAlignCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
  position: relative;
`

export const HyperLink = styled(UI_Link)<{ active?: boolean }>`
  ${commonMenuItem}

  ${({ active }) =>
    active &&
    css`
      &::after {
        ${animationFadeIn}
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 2px;
        z-index: 1;
        background-color: ${({ theme }: ThemeType) => theme.colors.white};
      }
    `}

  &.mobile {
    ${flexSpaceBetween}
    width: 100%;
    padding: 0;
  }
`
export const FunctionLink = styled.span<{ active?: string }>`
  ${commonMenuItem}

  ${({ active }) =>
    active === 'true' &&
    css`
      &::after {
        ${animationFadeIn}
        position: absolute;
        right: calc(50% - 15px);
        bottom: -1px;
        content: '';
        width: 0;
        height: 0;
        z-index: 1;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid
          ${({ theme }: ThemeType) => theme.colors.darkBlue_500};
      }
    `}
`
