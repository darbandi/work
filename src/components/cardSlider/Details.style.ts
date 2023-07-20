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
type ContainerType = {
  id?: string
}

export const Container = styled.div<ContainerType>`
  ${({ theme: { colors, remCalc }, id }: ThemeType & ContainerType) => css`
    background-color: ${colors.darkBlue_900};
    padding: ${remCalc(0)};
    padding-right: ${remCalc(0)};
    margin-left: ${remCalc(10)};
    margin-top: ${remCalc(32)};
    margin-right: ${remCalc(-50)};
    margin-left: 0;
    box-shadow: ${`0 0 5px ${colors.black}, 0 0 25px ${colors.black}`};

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
        height: 100%;

        .image-col,
        .base-row {
          height: 100%;
        }

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

    ${responsive(
      '-sm',
      css`
        .base-row {
          background-image: url('/images/sliders/${id}.png');
          background-size: cover;
          background-position: center;
          background-color: ${colors.gray_200};
          background-attachment: inherit;
        }

        .base-col {
          position: relative;
          padding: ${remCalc(50)};

          &::before {
            position: absolute;
            content: '';
            inset: 0;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 1;
            background: linear-gradient(90deg, transparent, black);
          }
        }
      `,
    )}
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
export const CustomImage = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    height: 100%;
    overflow: hidden;
    ${flexCenter}

    ${responsive(
      'sm',
      css`
        border-radius: 0;
        margin: -${remCalc(16)};
        height: max-content;
        box-shadow: ${`0 3px 5px ${colors.gray_800}`};
        height: 100%;
        .detail-image {
          height: 100% !important;
          width: auto !important;
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
    top: ${remCalc(-70)};

    .svg-inline--fa {
      background-color: ${colors.white};
      color: ${colors.gray_700};
      width: ${remCalc(18)};
      height: ${remCalc(18)};
      padding: ${remCalc(15)};
      border-radius: 50%;
      box-shadow: 0 0 ${remCalc(5)} ${colors.black};
      ${flexCenter}
    }

    ${responsive(
      '-sm',
      css`
        right: calc(90% - ${remCalc(16)});
        top: ${remCalc(-90)};
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
