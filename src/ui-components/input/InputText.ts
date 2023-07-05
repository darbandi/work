import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const UI_InputText = styled.input`
  border: 1px solid ${({ theme }: ThemeType) => theme.colors.gray_300};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(24)};
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(8)} ${theme.remCalc(16)}`};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(16)};
  width: 100%;
  height: ${({ theme }: ThemeType) => theme.remCalc(48)};
  transition: all 0.3s;
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};

  &:focus {
    outline: none;
    box-shadow: 0 0
      ${({ theme }: ThemeType) =>
        `${theme.remCalc(5)} ${theme.colors.gray_500}`};
    background-color: ${({ theme }: ThemeType) => theme.colors.white};
  }

  &::placeholder {
    color: ${({ theme }: ThemeType) => theme.colors.gray_500};
  }
`
