import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const Container = styled.div`
  .information {
    background: ${({ theme }: ThemeType) => theme.colors.brown_500};
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
    background-color: ${({ theme }: ThemeType) => theme.colors.brown_500};
  }
  .top-slider {
    background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_500};

    #top102 {
      margin: 0;
      padding-top: ${({ theme }: ThemeType) => theme.remCalc(80)};
      padding-bottom: ${({ theme }: ThemeType) => theme.remCalc(80)};
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
`
export const Cover = styled.div`
  background: ${({ theme }: ThemeType) =>
    `linear-gradient(270deg, transparent, ${theme.colors.brown_500})`};
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
      background: ${({ theme }: ThemeType) =>
        `linear-gradient(180deg, transparent, ${theme.colors.brown_500})`};
    `,
  )}
`
export const Position = styled.div`
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
        font-size: ${({ theme }: ThemeType) => theme.remCalc(62)};
      }
    `,
  )}
`
