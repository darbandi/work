import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

type UI_InputTextType = { rounded?: boolean; mode?: ThemeType['mode'] }

export const UI_InputText = styled.input<UI_InputTextType>`
  ${({
    theme: { colors, remCalc },
    rounded,
    mode,
  }: ThemeType & UI_InputTextType) => css`
    border: 1px solid ${colors.gray_800};
    border-radius: ${remCalc(8)};
    padding: ${`${remCalc(8)} ${remCalc(16)}`};
    font-size: ${remCalc(16)};
    width: 100%;
    height: ${remCalc(48)};
    transition: all 0.3s;
    color: ${colors.gray_700};
    background-color: transparent;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_700}`};
      color: ${colors.gray_100};
    }

    &::placeholder {
      color: ${colors.gray_500};
    }

    ${rounded &&
    css`
      border-radius: ${remCalc(24)};
    `}

    ${mode === 'light' &&
    css`
      color: ${colors.gray_700};
      border-color: ${colors.white};
      &:focus {
        box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_200}`};
      }
    `}
    ${mode === 'dark' &&
    css`
      color: ${colors.gray_100};
      border-color: ${colors.darkBlue_900};
      &:focus {
        box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_600}`};
      }
    `}
  `}
`
