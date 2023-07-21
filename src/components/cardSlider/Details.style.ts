import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationFadeIn,
  animationSlideInBottom,
  flexCenter,
  responsive,
} from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.darkBlue_900};
    padding: ${remCalc(0)};
    padding-right: ${remCalc(0)};
    margin-left: ${remCalc(10)};
    margin-top: ${remCalc(32)};
    margin-right: ${remCalc(-50)};
    margin-left: 0;
    box-shadow: ${`0 0 5px ${colors.black}, 0 0 25px ${colors.black}`};
    position: relative;

    .image-loading {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    ${animationFadeIn}

    ${responsive(
      'sm',
      css`
        position: fixed;
        inset: 0;
        z-index: 2;
        padding: 0;
        margin: 0;
        ${animationSlideInBottom}

        .image-loading {
          display: none;
        }

        .base-col {
          padding: 0 ${remCalc(24)} ${remCalc(24)} 0;
        }

        .image-col,
        .base-row {
          height: 100%;
        }

        .base-row {
          flex-direction: column-reverse;
        }
      `,
    )}

    ${responsive(
      '-sm',
      css`
        .base-col {
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
export const CloseIcon = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    position: absolute;
    cursor: pointer;
    left: 5%;
    top: ${remCalc(-40)};
    z-index: 1;

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
