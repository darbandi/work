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
  position: absolute;
  top: 0;
  right: 0;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding-top: ${({ theme }: ThemeType) => theme.remCalc(150)};
  padding-bottom: ${({ theme }: ThemeType) => theme.remCalc(64)};
  padding-inline-start: ${({ theme }: ThemeType) => theme.remCalc(64)};
  direction: ${({ theme }: ThemeType) => theme.direction};
  justify-content: end;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );

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
      padding: ${({ theme }: ThemeType) => theme.remCalc(30)} 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    `,
  )}
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
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(48)};
  font-family: 'Droid';
  text-decoration: none;
`
export const EnTitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 400;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(24)};
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(44)};
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
