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
  position: fixed;
  inset: 0;
  background-color: ${({ theme }: ThemeType) => theme.colors.black}e9;
  z-index: 2;

  ${responsive(
    '-sm',
    css`
      display: none;
    `,
  )}
`
export const Container = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_900};
  padding: ${({ theme }: ThemeType) => theme.remCalc(24)};
  padding-right: ${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-left: ${({ theme }: ThemeType) => theme.remCalc(10)};
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(32)};
  margin-right: -${({ theme }: ThemeType) => theme.remCalc(50)};
  margin-left: 0;
  box-shadow: ${({ theme }: ThemeType) =>
    `0 0 5px ${theme.colors.gray_200}, 0 0 25px ${theme.colors.gray_500}`};

  ${animationFadeIn}

  & > div {
    gap: ${({ theme }: ThemeType) => theme.remCalc(16)};
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
      padding: ${({ theme }: ThemeType) => theme.remCalc(16)};
      margin: 0;
      box-shadow: 0 0 3px ${({ theme }: ThemeType) => theme.colors.black},
        0 0 20px ${({ theme }: ThemeType) => theme.colors.black};

      & > div {
        flex-direction: column-reverse;
      }
    `,
  )}

  .view-like-time {
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(40)};
    gap: ${({ theme }: ThemeType) => theme.remCalc(12)};
    & > div {
      gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
      ${flexAlignCenter}
    }
  }
`
export const Title = styled.h1`
  color: ${({ theme }: ThemeType) => theme.colors.gray_100};
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(12)};
  font-weight: 700;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(48)};
  font-family: 'Droid';
  text-decoration: none;
  position: relative;
`
export const Description = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.gray_400};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(14)};
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(16)};
`
export const CustomImage = styled.div`
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  height: 100%;
  overflow: hidden;
  ${flexCenter}
  box-shadow: ${({ theme }: ThemeType) =>
    `0 0 3px ${theme.colors.gray_800}, 0 0 10px ${theme.colors.gray_800}`};

  ${responsive(
    'sm',
    css`
      border-radius: 0;
      margin: -${({ theme }: ThemeType) => theme.remCalc(16)};
      height: max-content;
      box-shadow: ${({ theme }: ThemeType) =>
        `0 3px 5px ${theme.colors.gray_800}`};

      .detail-image {
        width: 100% !important;
        height: auto !important;
        border-radius: 0;
      }
    `,
  )}
`
export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  left: 5%;
  top: ${({ theme }: ThemeType) => theme.remCalc(-35)};
  .svg-inline--fa {
    border: 5px solid ${({ theme }: ThemeType) => theme.colors.darkBlue_500};
    background-color: ${({ theme }: ThemeType) => theme.colors.white};
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    width: ${({ theme }: ThemeType) => theme.remCalc(32)};
    height: ${({ theme }: ThemeType) => theme.remCalc(32)};
    padding: ${({ theme }: ThemeType) => theme.remCalc(15)};
    border-radius: 50%;
    ${flexCenter}
  }
  ${responsive(
    '-sm',
    css`
      right: calc(100% - 20px);
      top: ${({ theme }: ThemeType) => theme.remCalc(-20)};
    `,
  )}
`
export const Actions = styled.div`
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(34)};
  width: fit-content;
`
