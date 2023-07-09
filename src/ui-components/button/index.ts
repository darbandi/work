import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'
import { commonColors } from '@/theme/Theme.styled'

type globalStyleType = Omit<
  ThemeType,
  'theme' | 'size' | 'lineHeight' | 'variant'
> & { variant?: 'contained' | 'outlined' }

type UI_ButtonType = Omit<ThemeType, 'variant'> & {
  variant?: 'contained' | 'outlined'
}

const globalStyle = styled.button<globalStyleType>`
  ${({ theme: { colors, remCalc } }: UI_ButtonType) => css`
    border-radius: ${remCalc(24)};
    padding: 0 ${remCalc(24)};
    font-size: ${remCalc(16)};
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    height: ${remCalc(48)};
    ${flexCenter}
    gap:  ${remCalc(12)};

    &:hover {
      box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_500}`};
    }
  `}
`

export const UI_Button = styled(globalStyle)`
  ${({
    theme: { colors },
    variant,
    color,
    backgroundColor,
  }: UI_ButtonType) => css`
    &,
    * {
      color: ${color
        ? colors[color as keyof typeof commonColors]
        : colors.gray_100};
    }

    ${variant === 'contained' &&
    css`
      background-color: ${backgroundColor
        ? colors[backgroundColor as keyof typeof commonColors]
        : colors.yellow_400};

      border: ${`1px solid ${
        backgroundColor
          ? colors[backgroundColor as keyof typeof commonColors]
          : colors.yellow_400
      }`};
      &,
      * {
        color: ${colors.gray_800};
      }
    `}
    ${variant === 'outlined' &&
    css`
      border: ${`1px solid ${
        color ? colors[color as keyof typeof commonColors] : colors.yellow_400
      }`};
      &,
      * {
        color: ${color
          ? colors[color as keyof typeof commonColors]
          : colors.yellow_400};
      }
    `}

    ${color === 'primary' &&
    css`
      background-color: ${colors.yellow_400};
      border: ${`1px solid ${colors.yellow_400}`};
      &,
      * {
        color: ${colors.gray_800};
      }
    `}
    ${color === 'secondary' &&
    css`
      background-color: ${colors.white};
      border: ${`1px solid ${colors.white}`};
      &,
      * {
        color: ${colors.gray_800};
      }
    `}
  `}
`
