import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin-bottom: ${remCalc(-40)};
    .information {
      background: ${colors.brown_500};
      position: relative;

      ${flexCenter}

      ${responsive(
        'sm',
        css`
          padding: 50px 0;
        `,
      )}
    }
    .image-wrapper {
      background-color: ${colors.brown_500};
    }
    .top-slider {
      background-color: ${colors.darkBlue_500};

      #top102 {
        margin: 0;
        padding-top: ${remCalc(80)};
        padding-bottom: ${remCalc(80)};
      }
    }

    ${responsive(
      'sm',
      css`
        .row-crew {
          flex-direction: column-reverse;
        }

        .thumbnail-image {
          display: none;
        }

        .image-wrapper {
          height: 70vh;
        }
      `,
    )}
  `}
`
export const Cover = styled.div`
  ${({ theme: { colors } }: ThemeType) => css`
    background: ${`linear-gradient(270deg, transparent, ${colors.brown_500})`};
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 1;

    ${responsive(
      'sm',
      css`
        width: 100%;
        height: 100px;
        top: -100px;
        z-index: 0;
        opacity: 1;
        background: ${`linear-gradient(180deg, transparent, ${colors.brown_500})`};
      `,
    )}
  `}
`
export const Position = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-54%, -50%) rotate(270deg);

    ${responsive(
      'sm',
      css`
        transform: translate(-50%, -100%);
        top: -10%;
        left: 50%;
        * {
          font-size: ${remCalc(62)};
        }
      `,
    )}
  `}
`
