import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationSlideInBottom,
  flexEnd,
  flexSpaceBetween,
  responsive,
} from '@/theme'

type ContainerType = {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}

export const Container = styled.div<ContainerType>`
  ${({
    theme: { colors, remCalc },
    xs,
    sm,
    md,
    lg,
  }: ThemeType & ContainerType) => css`
    background: ${colors.darkBlue_500};
    width: 50%;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    position: absolute;
    border-radius: ${remCalc(16)};
    padding: ${remCalc(24)};
    box-shadow: 0 0 30px ${colors.black};

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

    ${xs &&
    css`
      width: ${remCalc(576)};
    `}
    ${sm &&
    css`
      width: ${remCalc(768)};
    `}
    ${md &&
    css`
      width: ${remCalc(992)};
    `}
    ${lg &&
    css`
      width: ${remCalc(1200)};
    `}
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
  ${({ theme: { remCalc } }: ThemeType) => css`
    margin-bottom: ${remCalc(24)};
    font-size: ${remCalc(18)};
    font-weight: bold;
    ${flexSpaceBetween}

    .svg-inline--fa {
      cursor: pointer;
    }
  `}
`
export const Actions = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    margin-top: ${remCalc(32)};
    ${flexEnd}
    gap:${remCalc(16)};

    button {
      height: ${remCalc(36)};
    }
  `}
`
