import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const More = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    font-size: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;

  ${responsive(
    'xs',
    css`
      padding: 0 50px;
    `,
  )}
`
export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  margin-bottom: 12px;
`
export const Container = styled.div`
  margin-right: 50px;
  margin-top: 80px;

  ${responsive(
    'xs',
    css`
      margin-right: 0;
    `,
  )}
`
