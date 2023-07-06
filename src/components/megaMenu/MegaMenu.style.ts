import styled, { css } from 'styled-components'
import {
  ThemeType,
  animationFadeIn,
  flexCenter,
  flexStart,
  responsive,
} from '@/theme'
import { UI_Link } from '@/ui-components'

export const Container = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_500};
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
  box-shadow: 0
    ${({ theme }: ThemeType) =>
      `${theme.remCalc(10)} ${theme.remCalc(20)} ${theme.colors.black}`};

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

export const CategoryItem = styled(UI_Link)`
  background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_900};
  width: ${({ theme }: ThemeType) => theme.remCalc(150)};
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(12)} ${theme.remCalc(8)}`};
  border-radius: ${({ theme }: ThemeType) => `${theme.remCalc(8)}`};
  color: ${({ theme }: ThemeType) => theme.colors.gray_500};
  flex-basis: calc(25% - 16px);
  font-size: ${({ theme }: ThemeType) => theme.remCalc(12)};
  font-weight: bold;
  ${flexCenter}
  transition: all .3s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  border: ${({ theme }: ThemeType) =>
    `${theme.remCalc(1)} solid ${theme.colors.darkBlue_900}`};

  &:hover {
    color: ${({ theme }: ThemeType) => theme.colors.gray_100};
    border: ${({ theme }: ThemeType) =>
      `${theme.remCalc(1)} solid ${theme.colors.gray_100}`};
    box-sizing: border-box;
  }
`

export const MostView = styled.div`
  width: 40%;
  overflow: hidden;
  ${flexCenter}
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(20)};

  img {
    min-height: 100%;
  }
`
