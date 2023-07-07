import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const UI_InputText = styled.input`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    border: 1px solid ${colors.gray_300};
    border-radius: ${remCalc(24)};
    padding: ${`${remCalc(8)} ${remCalc(16)}`};
    font-size: ${remCalc(16)};
    width: 100%;
    height: ${remCalc(48)};
    transition: all 0.3s;
    background-color: transparent;
    color: ${colors.gray_700};

    &:focus {
      outline: none;
      box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_500}`};
      background-color: ${colors.white};
    }

    &::placeholder {
      color: ${colors.gray_500};
    }
  `}
`
