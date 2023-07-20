import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'
import { commonColors } from '@/theme/Theme.styled'

type innerType = {
  variant?: 'contained' | 'outlined'
  loading?: boolean
  fullWidth?: boolean
  size?: 'xs' | 'sm' | 'md'
}

type UI_ButtonType = Omit<ThemeType, 'variant' | 'size'> & innerType

type globalStyleType = Omit<UI_ButtonType, 'theme' | 'lineHeight'>

const globalStyle = styled.button<globalStyleType>`
  ${({
    theme: { colors, remCalc },
    loading,
    fullWidth,
    size,
  }: UI_ButtonType) => css`
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

    ${fullWidth &&
    css`
      width: 100%;
    `}

    &:hover {
      box-shadow: 0 0 ${`${remCalc(5)} ${colors.gray_500}`};
    }
    position: relative;
    z-index: 2;

    ${loading &&
    css`
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 1px solid ${colors.yellow_400};
        transition: all 3s;
        animation: clippath 3s infinite linear;
        border-radius: ${remCalc(30)};
      }

      @keyframes clippath {
        0%,
        100% {
          clip-path: inset(0 0 68% 0);
        }

        25% {
          clip-path: inset(0 89% 0 0);
        }
        50% {
          clip-path: inset(68% 0 0 0);
        }
        75% {
          clip-path: inset(0 0 0 89%);
        }
      }
    `}

    ${size === 'md' &&
    css`
      height: ${remCalc(32)};
      font-size: ${remCalc(14)};
      padding: 0 ${remCalc(18)};
    `}
    ${size === 'sm' &&
    css`
      height: ${remCalc(28)};
      font-size: ${remCalc(12)};
      padding: 0 ${remCalc(14)};
    `}
    ${size === 'xs' &&
    css`
      height: ${remCalc(24)};
      font-size: ${remCalc(10)};
      padding: 0 ${remCalc(10)};
    `}
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
