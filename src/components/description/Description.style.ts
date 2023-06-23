import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

export const Container = styled.div<{ displayAllText: boolean }>`
  background: ${({ theme }: ThemeType) => theme.colors.gray_900};
  color: ${({ theme }: ThemeType) => theme.colors.white};
  padding: ${({ theme }: ThemeType) => theme.remCalc(94)};

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  ${responsive(
    '-sm',
    css`
      .description {
        overflow: auto;
        display: block;
        text-overflow: wrap;
      }
    `,
  )}

  ${responsive(
    'sm',
    css`
      padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
    `,
  )}

  ${({ displayAllText }) =>
    displayAllText &&
    css`
      .description {
        overflow: auto;
        display: block;
        text-overflow: wrap;
      }
    `}
`
export const More = styled.div`
  margin-top: ${({ theme }: ThemeType) => theme.remCalc(32)};
  ${flexCenter}
  .fa-more {
    width: ${({ theme }: ThemeType) => theme.remCalc(30)};
    height: ${({ theme }: ThemeType) => theme.remCalc(30)};
    background-color: ${({ theme }: ThemeType) => theme.colors.gray_300};
    color: ${({ theme }: ThemeType) => theme.colors.gray_700};
    border-radius: 50%;
    padding: ${({ theme }: ThemeType) => theme.remCalc(10)};
    cursor: pointer;
    ${flexCenter}
  }

  ${responsive(
    '-sm',
    css`
      display: none;
    `,
  )}
`
