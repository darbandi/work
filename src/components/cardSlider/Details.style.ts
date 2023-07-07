import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationFadeIn,
  animationSlideInBottom,
  flexAlignCenter,
  flexCenter,
  responsive,
} from '@/theme'

export const Cover = styled.div`
  ${({ theme: { colors } }: ThemeType) => css`
    position: fixed;
    inset: 0;
    background-color: ${colors.black}e9;
    z-index: 2;

    ${responsive(
      '-sm',
      css`
        display: none;
      `,
    )}
  `}
`
export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.darkBlue_900};
    padding: ${remCalc(24)};
    padding-right: ${remCalc(50)};
    margin-left: ${remCalc(10)};
    margin-top: ${remCalc(32)};
    margin-right: -${remCalc(50)};
    margin-left: 0;
    box-shadow: ${`0 0 5px ${colors.gray_200}, 0 0 25px ${colors.gray_500}`};

    ${animationFadeIn}

    & > div {
      gap: ${remCalc(16)};
    }

    ${responsive(
      'sm',
      css`
        ${animationSlideInBottom}
        transition: all .3s;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        padding: ${remCalc(16)};
        margin: 0;
        box-shadow: 0 0 3px ${colors.black}, 0 0 20px ${colors.black};

        & > div {
          flex-direction: column-reverse;
        }
      `,
    )}

    .view-like-time {
      color: ${colors.gray_700};
      margin-bottom: ${remCalc(40)};
      gap: ${remCalc(12)};
      & > div {
        gap: ${remCalc(4)};
        ${flexAlignCenter}
      }
    }
  `}
`
export const Title = styled.h1`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.gray_100};
    margin-bottom: ${remCalc(12)};
    font-weight: 700;
    font-size: ${remCalc(48)};
    font-family: 'Droid';
    text-decoration: none;
    position: relative;
  `}
`
export const Description = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.gray_400};
    font-size: ${remCalc(14)};
    margin-bottom: ${remCalc(16)};
  `}
`
export const CustomImage = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    border-radius: ${remCalc(8)};
    height: 100%;

    overflow: hidden;
    ${flexCenter}
    box-shadow: ${`0 0 3px ${colors.gray_800}, 0 0 10px ${colors.gray_800}`};

    ${responsive(
      'sm',
      css`
        border-radius: 0;
        margin: -${remCalc(16)};
        height: max-content;
        box-shadow: ${`0 3px 5px ${colors.gray_800}`};

        .detail-image {
          width: 100% !important;
          height: auto !important;
          border-radius: 0;
        }
      `,
    )}
  `}
`
export const CloseIcon = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    position: absolute;
    cursor: pointer;
    left: 5%;
    top: ${remCalc(-35)};
    .svg-inline--fa {
      border: 5px solid ${colors.darkBlue_500};
      background-color: ${colors.white};
      color: ${colors.gray_700};
      width: ${remCalc(32)};
      height: ${remCalc(32)};
      padding: ${remCalc(15)};
      border-radius: 50%;
      ${flexCenter}
    }
    ${responsive(
      '-sm',
      css`
        right: calc(100% - 20px);
        top: ${remCalc(-20)};
      `,
    )}
  `}
`
export const Actions = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    margin-top: ${remCalc(34)};
    width: fit-content;
  `}
`
