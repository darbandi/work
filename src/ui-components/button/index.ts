import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

const globalStyle = css`
  border: none;
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(24)};
  padding: 0 ${({ theme }: ThemeType) => theme.remCalc(24)};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(16)};
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  height: ${({ theme }: ThemeType) => theme.remCalc(48)};
  ${flexCenter}
  gap:  ${({ theme }: ThemeType) => theme.remCalc(12)};

  &:hover {
    box-shadow: 0 0
      ${({ theme }: ThemeType) =>
        `${theme.remCalc(5)} ${theme.colors.gray_500}`};
  }
`

export const UI_ContainedButton = styled.button<{
  variant?: 'primary' | 'secondary'
  color?: string
}>`
  background-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }: ThemeType) => theme.colors.white};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`

export const UI_TextButton = styled.button<{
  variant?: 'primary' | 'secondary'
  color?: string
}>`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`

export const UI_OutlinedButton = styled.button<{
  variant?: 'primary' | 'secondary'
  color?: string
}>`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_100};
  ${globalStyle}
  border: ${({ theme }: ThemeType) => `1px solid ${theme.colors.gray_100}`};

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      border-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
      color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      border-color: ${({ theme }: ThemeType) => theme.colors.gray_700};
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`
