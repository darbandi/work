import styled, { css } from 'styled-components'
import { ThemeType, flexSB, responsive } from '@/theme'

export const Container = styled.div`
  flex-direction: row;
  ${flexSB}
  height: 100vh;
  background: ${({ theme }: ThemeType) =>
    `linear-gradient(45deg, ${theme.colors.gray_500}, ${theme.colors.white})`};

  .img {
    background-image: url('/login-banner.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }: ThemeType) => theme.colors.gray_200};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${({ theme }: ThemeType) => theme.remCalc(48)};
  width: ${({ theme }: ThemeType) => theme.remCalc(400)};
  margin: 0 auto;
  padding: ${({ theme }: ThemeType) => theme.remCalc(24)};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  background-color: ${({ theme }: ThemeType) => theme.colors.white};
  box-shadow: 0 0
    ${({ theme }: ThemeType) => `${theme.remCalc(20)} ${theme.colors.gray_400}`};

  ${responsive(
    'sm',
    css`
      width: 70%;
    `,
  )}
  ${responsive(
    'xs',
    css`
      width: 90%;
    `,
  )}
`
