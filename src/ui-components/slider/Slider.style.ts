import styled, { css } from 'styled-components'
import { SliderButtonsPosition } from '.'
import { ThemeType, responsive } from '@/theme'

export const PrevButtonsStyle = styled.div<{
  position?: SliderButtonsPosition
}>`
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_100}70;
  width: ${({ theme }: ThemeType) => theme.remCalc(48)};
  height: ${({ theme }: ThemeType) => theme.remCalc(48)};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(60)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  position: absolute;
  z-index: 3;

  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.gray_200};
  }

  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  }

  ${responsive(
    'sm',
    css`
      display: none;
    `,
  )}

  ${({ position }) =>
    position === SliderButtonsPosition.side
      ? css`
          background: ${({ theme }: ThemeType) =>
            `linear-gradient(270deg, ${theme.colors.black}90, transparent)`};
          top: 0;
          right: 0;
          border-radius: 0;
          height: ${({ theme }: ThemeType) =>
            `calc(100% - ${theme.remCalc(43)})`};
          width: ${({ theme }: ThemeType) => theme.remCalc(70)};
          &:hover {
            background: ${({ theme }: ThemeType) =>
              `linear-gradient(270deg, ${theme.colors.black}, transparent)`};
          }
          .svg-inline--fa {
            color: ${({ theme }: ThemeType) => theme.colors.gray_100};
            font-size: ${({ theme }: ThemeType) => theme.remCalc(32)};
          }
        `
      : css`
          bottom: ${({ theme }: ThemeType) => theme.remCalc(50)};
          left: ${({ theme }: ThemeType) => theme.remCalc(100)};
        `}
`
export const NextButtonsStyle = styled(PrevButtonsStyle)<{
  position?: SliderButtonsPosition
}>`
  ${({ position }) =>
    position === SliderButtonsPosition.side
      ? css`
          background: ${({ theme }: ThemeType) =>
            `linear-gradient(90deg, ${theme.colors.black}90, transparent)`};
          top: 0;
          right: auto;
          left: 0;
          border-radius: 0;
          height: ${({ theme }: ThemeType) =>
            `calc(100% - ${theme.remCalc(42)})`};

          &:hover {
            background: ${({ theme }: ThemeType) =>
              `linear-gradient(90deg, ${theme.colors.black}, transparent)`};
          }
        `
      : css`
          right: auto;
          left: ${({ theme }: ThemeType) => theme.remCalc(40)};
        `}
`
