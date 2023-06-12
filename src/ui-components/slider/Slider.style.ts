import styled, { css } from 'styled-components'
import { SliderButtonsPosition } from '.'
import { ThemeType } from '@/theme'

export const PrevButtonsStyle = styled.div<{
  position?: SliderButtonsPosition
}>`
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_100}70;
  width: 48px;
  height: 48px;
  border-radius: 60px;
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

  ${({ position }) =>
    position === SliderButtonsPosition.side
      ? css`
          background: ${({ theme }: ThemeType) =>
            `linear-gradient(270deg, ${theme.colors.black}90, transparent)`};
          top: 0;
          right: 0;
          border-radius: 0;
          height: calc(100% - 43px);
          width: 70px;
          &:hover {
            background: ${({ theme }: ThemeType) =>
              `linear-gradient(270deg, ${theme.colors.black}, transparent)`};
          }
          .svg-inline--fa {
            color: ${({ theme }: ThemeType) => theme.colors.gray_100};
            font-size: 32px;
          }
        `
      : css`
          bottom: 50px;
          left: 100px;
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
          height: calc(100% - 42px);

          &:hover {
            background: ${({ theme }: ThemeType) =>
              `linear-gradient(90deg, ${theme.colors.black}, transparent)`};
          }
        `
      : css`
          right: auto;
          left: 40px;
        `}
`
