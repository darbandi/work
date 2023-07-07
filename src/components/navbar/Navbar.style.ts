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
  ${({ theme: { remCalc } }: ThemeType) => css`
    .fa-bars {
      display: none;
    }
    ${responsive(
      'sm',
      css`
        .fa-bars {
          display: block;
          font-size: ${remCalc(28)};
        }
      `,
    )}
  `}
`
export const Ul = styled.ul`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin: 0;
    list-style-type: none;
    list-style: none;

    .fa-angle {
      font-size: 12px;
    }

    &.desktop {
      ${flexAlignCenter}
      gap: ${remCalc(18)};
      padding: 0;

      ${responsive(
        'sm',
        css`
          display: none;
        `,
      )}
    }

    &.mobile {
      padding: ${remCalc(18)};
      display: flex;
      align-items: start;
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: ${remCalc(300)};
      background-color: ${colors.gray_100};
      box-shadow: 0 0 ${`${remCalc(80)} ${colors.black}`};
      padding-top: ${remCalc(48)};

      .fa-angle {
        color: ${colors.gray_700};
        font-size: 12px;
      }

      ${animationSlideInRight}
    }
  `}
`
export const Li = styled.li`
  ${({ theme: { remCalc } }: ThemeType) => css`
    &.mobile {
      padding: ${remCalc(18)} 0;
      width: 100%;
    }
  `}
`
const commonMenuItem = css`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.gray_300};
    padding: ${remCalc(16)};
    cursor: pointer;
    ${flexAlignCenter}
    gap: ${remCalc(8)};
    position: relative;
  `}
`
type LinkType = { active?: boolean }

export const HyperLink = styled(UI_Link)<LinkType>`
  ${({ theme: { colors }, active }: ThemeType & LinkType) => css`
    ${commonMenuItem}

    ${active &&
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
        background-color: ${colors.white};
      }
    `}

  &.mobile {
      ${flexSpaceBetween}
      width: 100%;
      padding: 0;
    }
  `}
`
export const FunctionLink = styled.span<LinkType>`
  ${({ theme: { colors }, active }: ThemeType & LinkType) => css`
    ${commonMenuItem}

    ${active &&
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
        border-bottom: 10px solid ${colors.darkBlue_500};
      }
    `}
  `}
`
