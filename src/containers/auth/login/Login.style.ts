import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  gap: 48px;
  width: 400px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeType) => theme.colors.white};
  box-shadow: 0 0 20px ${({ theme }: ThemeType) => theme.colors.gray_400};

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
