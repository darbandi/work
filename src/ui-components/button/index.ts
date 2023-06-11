import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

const globalStyle = css`
  border: none;
  border-radius: 24px;
  padding: 0 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  height: 48px;

  &:hover {
    box-shadow: 0 0 5px grey;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${({ theme }: ThemeType) => theme.colors.primary};
  color: ${({ theme }: ThemeType) => theme.colors.secondary};
  ${globalStyle}
`

export const SecondaryButton = styled.button`
  background-color: ${({ theme }: ThemeType) => theme.colors.bg_main};
  color: ${({ theme }: ThemeType) => theme.colors.secondary};
  ${globalStyle}
`

export const OutlinedButton = styled.button`
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.text_main};
  ${globalStyle}
  border: ${({ theme }: ThemeType) => `1px solid ${theme.colors.bg_main}`};
`
