import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const InputText = styled.input`
  border: 1px solid ${({ theme }: ThemeType) => theme.colors.gray_200};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  transition: all 0.3s;
  background-color: transparent;
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }: ThemeType) => theme.colors.gray_500};
    background-color: ${({ theme }: ThemeType) => theme.colors.white};
  }

  &::placeholder {
    color: ${({ theme }: ThemeType) => theme.colors.gray_500};
  }
`
