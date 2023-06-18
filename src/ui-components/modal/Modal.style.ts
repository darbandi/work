import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationSlideInBottom,
  flexEnd,
  flexSpaceBetween,
  responsive,
} from '@/theme'

export const Container = styled.div<{
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}>`
  background: ${({ theme }: ThemeType) => theme.colors.white};
  width: 50%;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  position: absolute;
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(16)};
  padding: ${({ theme }: ThemeType) => theme.remCalc(24)};
  box-shadow: 0 0 30px ${({ theme }: ThemeType) => theme.colors.black};

  ${responsive(
    'sm',
    css`
      width: 100%;
      bottom: 0;
      left: 0;
      top: auto;
      transform: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      ${animationSlideInBottom}
    `,
  )}

  ${({ xs }) =>
    xs &&
    css`
      width: ${({ theme }: ThemeType) => theme.remCalc(576)};
    `}
${({ sm }) =>
    sm &&
    css`
      width: ${({ theme }: ThemeType) => theme.remCalc(768)};
    `}
${({ md }) =>
    md &&
    css`
      width: ${({ theme }: ThemeType) => theme.remCalc(992)};
    `}
${({ lg }) =>
    lg &&
    css`
      width: ${({ theme }: ThemeType) => theme.remCalc(1200)};
    `}
`
export const Blur = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`

export const Header = styled.div`
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(24)};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(18)};
  font-weight: bold;

  ${flexSpaceBetween}
  .svg-inline--fa {
    cursor: pointer;
  }
`
export const Actions = styled.div`
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(32)};
  ${flexEnd}
  gap:${({ theme }: ThemeType) => theme.remCalc(16)};
  button {
    height: ${({ theme }: ThemeType) => theme.remCalc(36)};
  }
`
