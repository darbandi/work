import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'
import { commonColors } from '@/theme/Theme.styled'

type globalStyleType = Omit<ThemeType, 'theme' | 'size' | 'lineHeight'>

const globalStyle = styled.button<globalStyleType>`
  ${({
    theme: { colors, remCalc },
    color = 'gray_700',
    backgroundColor = 'white',
  }: ThemeType) => css`
    &,
    * {
      color: ${colors[color as keyof typeof commonColors]};
    }
    background-color: ${colors[backgroundColor as keyof typeof commonColors]};
    border: ${`1px solid ${colors[color as keyof typeof commonColors]}`};
    border-radius: ${remCalc(24)};
    padding: 0 ${remCalc(24)};
    font-size: ${remCalc(16)};
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

export const UI_ContainedButton = styled(globalStyle)`
  ${({ theme: { colors }, variant }: ThemeType) => css`
    border: none;
    ${variant === 'primary' &&
    css`
      background-color: ${colors.yellow_400};
    `}
    ${variant === 'secondary' &&
    css`
      background-color: ${colors.white};
    `}
  `}
`

export const UI_TextButton = styled(globalStyle)`
  ${({ theme: { colors }, variant }: ThemeType) => css`
    border: none;
    ${variant === 'primary' &&
    css`
      &,
      * {
        color: ${colors.yellow_400};
      }
    `}
    ${variant === 'secondary' &&
    css`
      &,
      * {
        color: ${colors.gray_700};
      }
    `}
  `}
`

export const UI_OutlinedButton = styled(globalStyle)`
  ${({ theme: { colors }, variant }: ThemeType) => css`
    background-color: transparent;
    ${variant === 'primary' &&
    css`
      &,
      * {
        color: ${colors.yellow_400};
      }
      border-color: ${colors.yellow_400};
    `}
    ${variant === 'secondary' &&
    css`
      &,
      * {
        color: ${colors.gray_700};
      }
      border-color: ${colors.gray_700};
    `}
    ${variant === 'light' &&
    css`
      &,
      * {
        color: ${colors.gray_100};
      }
      border-color: ${colors.gray_100};
    `}
  `}
`
