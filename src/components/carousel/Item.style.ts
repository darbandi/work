import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const ItemWrapper = styled.div`
  height: 100vh;
  ${responsive(
    'sm',
    css`
      height: 70vh;
    `,
  )}
`
export const InfoWrapper = styled.div`
  ${({ theme: { remCalc, direction } }: ThemeType) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 50%;
    bottom: 0;
    display: flex;
    align-items: start;
    flex-direction: column;
    padding-top: ${remCalc(150)};
    padding-bottom: ${remCalc(64)};
    padding-inline-start: ${remCalc(64)};
    direction: ${direction};
    justify-content: end;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;

    ${responsive(
      'sm',
      css`
        top: auto;
        right: auto;
        left: auto;
        bottom: 0;
        height: auto;
        width: 100%;
        align-items: center;
        padding: ${remCalc(30)} 0;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.7) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      `,
    )}
  `}
`
export const InfoSection = styled.div`
  ${responsive(
    'md',
    css`
      text-align: center;
    `,
  )}
`
export const TitleStyle = styled.a`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.white};
    font-weight: 700;
    font-size: ${remCalc(48)};
    font-family: 'Droid';
    text-decoration: none;
  `}
`
export const EnTitleStyle = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.white};
    font-weight: 400;
    font-size: ${remCalc(24)};
    margin-bottom: ${remCalc(44)};
  `}
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 100% !important;
  width: auto !important;
  ${flexCenter}

  ${responsive(
    '-md',
    css`
      height: 100% !important;
      width: auto !important;
      .img {
        height: 100% !important;
        width: auto !important;
      }
    `,
  )}
`
