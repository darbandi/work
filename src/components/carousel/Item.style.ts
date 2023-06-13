import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const InfoStyle = styled.div`
  position: absolute;
  top: ${({ theme }: ThemeType) => theme.remCalc(57)};
  right: 0;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding-top: ${({ theme }: ThemeType) => theme.remCalc(40)};
  padding-bottom: ${({ theme }: ThemeType) => theme.remCalc(88)};
  padding-inline-start: ${({ theme }: ThemeType) => theme.remCalc(64)};
  justify-content: start;
  direction: ${({ theme }: ThemeType) => theme.direction};
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
      width: 100%;
      height: auto;
      align-items: center;
      padding: ${({ theme }: ThemeType) => theme.remCalc(10)} 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    `,
  )}
`
export const TitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(48)};
`
export const DescriptionStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 400;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(24)};
`
export const ItemWrapper = styled.div``
export const ImageWrapper = styled.div`
  overflow: hidden;
  height: ${({ theme }: ThemeType) => theme.remCalc(400)};
  display: flex;
  align-items: center;
  justify-content: center;

  ${responsive(
    '-md',
    css`
      height: auto;
      width: 100%;
      .img {
        height: auto !important;
        width: 100% !important;
      }
    `,
  )}
`
