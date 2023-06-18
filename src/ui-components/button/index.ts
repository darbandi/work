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

export const ContainedButton = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  background-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${({ theme }: ThemeType) => theme.colors.white};
    `}
`

export const TextButton = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    `}
`

export const OutlinedButton = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_100};
  ${globalStyle}
  border: ${({ theme }: ThemeType) => `1px solid ${theme.colors.gray_100}`};

  ${(props) =>
    props.variant === 'primary' &&
    css`
      border-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
      color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      border-color: ${({ theme }: ThemeType) => theme.colors.gray_700};
      color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    `}
`
