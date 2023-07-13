import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

export type TextFieldType = {
  rounded?: boolean
  mode?: ThemeType['mode']
  color?: string
  backgroundColor?: string
}

export const TextFieldStyle = styled.div<TextFieldType>`
  ${({
    theme: { colors, remCalc },
    rounded,
    mode,
    color,
    backgroundColor,
  }: ThemeType & TextFieldType) => css`
    ${flexCenter}
    flex: 2 1;
    width: 100%;
    border: 1px solid ${colors.gray_800};
    border-radius: ${remCalc(8)};
    padding: ${`${remCalc(8)} ${remCalc(16)}`};
    height: ${remCalc(48)};
    transition: all 0.3s;
    font-size: ${remCalc(16)};

    &:focus-within {
      border: 1px solid ${colors.gray_500};
    }

    ${rounded &&
    css`
      border-radius: ${remCalc(24)};
    `}

    ${mode === 'light' &&
    css`
      &,
      * {
        color: ${colors.gray_100};
      }
      border-color: ${colors.gray_600};

      &::placeholder {
        &,
        * {
          color: ${colors.gray_600};
        }
      }
    `}

    ${mode === 'dark' &&
    css`
      &,
      * {
        color: ${colors.gray_800};
      }
      border-color: ${colors.gray_400};

      &::placeholder {
        &,
        * {
          color: ${colors.gray_400};
        }
      }
    `}

    ${color &&
    css`
      &,
      * {
        color: ${colors[color as keyof typeof colors]};
      }
    `}
    
    ${backgroundColor &&
    css`
      background-color: ${colors[backgroundColor as keyof typeof colors]};
    `}
  `}
`
export const InputTextStyle = styled.input`
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background-color: transparent;
`
