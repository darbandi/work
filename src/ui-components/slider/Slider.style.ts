import styled, { css } from 'styled-components'
import { UI_SliderButtonsPosition } from '.'
import { ThemeType, flexCenter, responsive } from '@/theme'

type ButtonsType = {
  position?: UI_SliderButtonsPosition
}

export const PrevButtonsStyle = styled.div<ButtonsType>`
  ${({ theme: { colors, remCalc }, position }: ThemeType & ButtonsType) => css`
    background-color: ${colors.gray_100}70;
    width: ${remCalc(48)};
    height: ${remCalc(48)};
    border-radius: ${remCalc(60)};
    ${flexCenter}
    cursor: pointer;
    transition: all 0.3s;
    position: absolute;
    z-index: 3;

    &:hover {
      background-color: ${colors.gray_200};
    }

    .svg-inline--fa {
      color: ${colors.gray_800};
    }

    ${responsive(
      'sm',
      css`
        display: none;
      `,
    )}

    ${position === UI_SliderButtonsPosition.side
      ? css`
          background: ${`linear-gradient(270deg, ${colors.black}90, transparent)`};
          top: 0;
          right: 0;
          border-radius: 0;
          height: ${`calc(100% - ${remCalc(43)})`};
          width: ${remCalc(70)};
          &:hover {
            background: ${`linear-gradient(270deg, ${colors.black}, transparent)`};
          }
          .svg-inline--fa {
            color: ${colors.gray_100};
            font-size: ${remCalc(32)};
          }
        `
      : css`
          bottom: ${remCalc(50)};
          left: ${remCalc(100)};
        `}
  `}
`
export const NextButtonsStyle = styled(PrevButtonsStyle)<ButtonsType>`
  ${({ theme: { colors, remCalc }, position }: ThemeType & ButtonsType) => css`
    ${position === UI_SliderButtonsPosition.side
      ? css`
          background: ${`linear-gradient(90deg, ${colors.black}90, transparent)`};
          top: 0;
          right: auto;
          left: 0;
          border-radius: 0;
          height: ${`calc(100% - ${remCalc(42)})`};

          &:hover {
            background: ${`linear-gradient(90deg, ${colors.black}, transparent)`};
          }
        `
      : css`
          right: auto;
          left: ${remCalc(40)};
        `}
  `}
`
