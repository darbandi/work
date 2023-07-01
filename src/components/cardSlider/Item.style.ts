import styled, { css } from 'styled-components'
import Link from 'next/link'
import {
  ThemeType,
  flexCenter,
  flexSpaceBetween,
  flexStart,
  responsive,
} from '@/theme'

export const ItemWrapper = styled.div`
  position: relative;
`
export const InfoStyle = styled.div`
  padding-top: ${({ theme }: ThemeType) => theme.remCalc(4)};
  direction: ${({ theme }: ThemeType) => theme.direction};
`
export const TitleStyle = styled(Link)<{ mode?: 'dark' | 'light' }>`
  text-decoration: none;
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(20)};
  ${flexStart}
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  ${({ mode }) =>
    mode === 'light' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.white};
    `}
`

const commonHovered = css`
  opacity: 1;

  .fa-angle-double-down {
    cursor: pointer;
    transition: all 0.3s;
    transform: translateY(${({ theme }: ThemeType) => theme.remCalc(30)});
  }

  .card-item-footer {
    transform: translateY(0);
  }
`

export const Hovered = styled.div<{ isActive: boolean }>`
  opacity: 0;
  position: absolute;
  inset: 0;
  background-color: ${({ theme }: ThemeType) => theme.colors.black}c7;
  bottom: ${({ theme }: ThemeType) => theme.remCalc(42)};
  flex-direction: column;
  transition: all 0.3s;
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(8)} ${theme.remCalc(16)}`};
  ${flexSpaceBetween}

  &:hover {
    ${commonHovered}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      ${commonHovered}
    `}
`
export const Main = styled.div`
  flex: 1;
  ${flexCenter}
  flex-direction: column;

  .svg-inline--fa {
    font-size: ${({ theme }: ThemeType) => theme.remCalc(24)};
  }
`
const commonCss = css`
  transition: all 0.3s;
  position: absolute;
  content: '';
  left: -${({ theme }: ThemeType) => theme.remCalc(10)};
  right: -${({ theme }: ThemeType) => theme.remCalc(10)};
  width: ${({ theme }: ThemeType) => theme.remCalc(70)};
  height: ${({ theme }: ThemeType) => theme.remCalc(70)};
  border-radius: 50%;
  background-color: ${({ theme }: ThemeType) => theme.colors.white}50;
`

export const Play = styled.a`
  background-color: ${({ theme }: ThemeType) => theme.colors.white};
  border-radius: 50%;
  width: ${({ theme }: ThemeType) => theme.remCalc(50)};
  height: ${({ theme }: ThemeType) => theme.remCalc(50)};
  position: relative;
  color: black;
  transition: all 0.3s;
  cursor: pointer;
  ${flexCenter}

  .fa-play {
    color: ${({ theme }: ThemeType) => theme.colors.gray_800};
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
      color: ${({ theme }: ThemeType) => theme.colors.black};
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
`
export const Details = styled.div`
  .fa-angle-double-down {
    transition: all 0.3s;
  }
`
export const Footer = styled.div`
  ${flexSpaceBetween}
  width: 100%;
  transition: all 0.3s;
  transform: translateY(${({ theme }: ThemeType) => theme.remCalc(20)});

  ${responsive(
    'sm',
    css`
      display: none;
    `,
  )}
`
export const LikeView = styled.div`
  ${flexCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(12)};
`

const commonFontColors = css`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(12)};
  .svg-inline--fa {
    margin-inline-end: ${({ theme }: ThemeType) => theme.remCalc(4)};
  }
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
