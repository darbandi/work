import styled, { css } from 'styled-components'
import {
  ThemeType,
  flexCenter,
  flexSpaceBetween,
  flexStart,
  responsive,
} from '@/theme'
import { UI_Link } from '@/ui-components'

export const ItemWrapper = styled.div`
  position: relative;
`
export const InfoStyle = styled.div`
  ${({ theme: { remCalc, direction } }: ThemeType) => css`
    padding-top: ${remCalc(4)};
    direction: ${direction};
  `}
`
export const TitleStyle = styled(UI_Link)`
  ${({ theme: { colors, remCalc }, mode }: ThemeType) => css`
    color: ${colors.gray_800};
    font-weight: 500;
    font-size: ${remCalc(20)};
    ${flexStart}
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;

    ${mode === 'light' &&
    css`
      color: ${colors.white};
    `}
  `}
`

const commonHovered = css`
  ${({ theme: { remCalc } }: ThemeType) => css`
    opacity: 1;

    .fa-angle-double-down {
      cursor: pointer;
      transition: all 0.3s;
      transform: translateY(${remCalc(30)});
    }

    .card-item-footer {
      transform: translateY(0);
    }
  `}
`

export const Hovered = styled.div`
  ${({ theme: { colors, remCalc }, isActive }: ThemeType) => css`
    opacity: 0;
    position: absolute;
    inset: 0;
    background-color: ${colors.black}c7;
    bottom: ${remCalc(34)};
    flex-direction: column;
    transition: all 0.3s;
    padding: ${`${remCalc(8)} ${remCalc(16)}`};
    ${flexSpaceBetween}

    &:hover {
      ${commonHovered}
    }

    ${isActive &&
    css`
      ${commonHovered}
    `}
  `}
`
export const Main = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    flex: 1;
    ${flexCenter}
    flex-direction: column;

    .svg-inline--fa {
      font-size: ${remCalc(24)};
    }
  `}
`
const commonCss = css`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    transition: all 0.3s;
    position: absolute;
    content: '';
    left: -${remCalc(10)};
    right: -${remCalc(10)};
    width: ${remCalc(70)};
    height: ${remCalc(70)};
    border-radius: 50%;
    background-color: ${colors.white}50;
  `}
`

export const Play = styled.a`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.white};
    border-radius: 50%;
    width: ${remCalc(50)};
    height: ${remCalc(50)};
    position: relative;
    color: black;
    transition: all 0.3s;
    cursor: pointer;
    ${flexCenter}

    .fa-play {
      color: ${colors.gray_800};
      z-index: 1;
    }

    &::after {
      opacity: 0;
      transform: scale(0);
      ${commonCss}
    }

    &:hover {
      transition: all 0.3s;
      .fa-play {
        color: ${colors.black};
      }

      &::after {
        transform: scale(1);
        opacity: 1;
        ${commonCss}
        z-index: 0;
      }
    }

    ${responsive(
      'sm',
      css`
        display: none;
      `,
    )}
  `}
`
export const Details = styled.div`
  .fa-angle-double-down {
    transition: all 0.3s;
  }
`
export const Footer = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexSpaceBetween}
    width: 100%;
    transition: all 0.3s;
    transform: translateY(${remCalc(20)});

    ${responsive(
      'sm',
      css`
        display: none;
      `,
    )}
  `}
`
export const LikeView = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexCenter}
    gap: ${remCalc(12)};
  `}
`

const commonFontColors = css`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.white};
    font-size: ${remCalc(12)};
    .svg-inline--fa {
      margin-inline-end: ${remCalc(4)};
    }
  `}
`

export const Like = styled.div`
  ${commonFontColors}
`
export const View = styled.div`
  ${commonFontColors}
`
export const Time = styled.div`
  ${commonFontColors}
`
