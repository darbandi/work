import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

const globalStyle = css`
  border: none;
  border-radius: 24px;
  padding: 0 24px;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(16)};
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  height: 48px;

  &:hover {
    box-shadow: 0 0 5px ${({ theme }: ThemeType) => theme.colors.gray_500};
  }
`

export const ContainedButton = styled.button`
  background-color: ${({ theme }: ThemeType) => theme.colors.yellow_400};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}
`

export const TextButton = styled.button`
  background-color: ${({ theme }: ThemeType) => theme.colors.white};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  ${globalStyle}
`

export const OutlinedButton = styled.button`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_100};
  ${globalStyle}
  border: ${({ theme }: ThemeType) => `1px solid ${theme.colors.gray_100}`};
`
