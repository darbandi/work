import styled, { css } from 'styled-components'
import Link from 'next/link'
import {
  ThemeType,
  animationFadeIn,
  flexCenter,
  flexStart,
  responsive,
} from '@/theme'

export const Container = styled.div`
  background: ${({ theme }: ThemeType) => theme.colors.white};
  position: absolute;
  top: ${({ theme }: ThemeType) => theme.remCalc(58)};
  right: 30px;
  width: 60%;
  border-radius: ${({ theme }: ThemeType) =>
    `0 0 ${theme.remCalc(32)} ${theme.remCalc(32)}`};
  ${flexCenter}
  align-items: stretch;
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(32)} ${theme.remCalc(32)}`};
  box-shadow: 0 0
    ${({ theme }: ThemeType) => `${theme.remCalc(20)} ${theme.colors.black}`};

  ${animationFadeIn}

  ${responsive(
    'md',
    css`
      width: 100%;
      right: 0;
    `,
  )}
  ${responsive(
    'xs',
    css`
      display: none;
    `,
  )}
`

export const Categories = styled.div`
  flex-wrap: wrap;
  width: 60%;
  gap: ${({ theme }: ThemeType) => theme.remCalc(16)};
  ${flexStart}
`

export const CategoryItem = styled(Link)`
  text-decoration: none;
  background: ${({ theme }: ThemeType) => theme.colors.gray_200};
  width: ${({ theme }: ThemeType) => theme.remCalc(150)};
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(12)} ${theme.remCalc(8)}`};
  border-radius: ${({ theme }: ThemeType) => `${theme.remCalc(8)}`};
  color: ${({ theme }: ThemeType) => theme.colors.gray_700};
  flex-basis: calc(25% - 16px);
  font-size: ${({ theme }: ThemeType) => theme.remCalc(12)};
  font-weight: bold;
  ${flexCenter}
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.colors.gray_600};
    color: ${({ theme }: ThemeType) => theme.colors.gray_200};
  }
`

export const MostView = styled.div`
  width: 40%;
  overflow: hidden;
  ${flexCenter}
  border-radius: 20px;

  img {
    min-height: 100%;
  }
`
