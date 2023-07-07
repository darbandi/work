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
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.darkBlue_500};
    position: absolute;
    top: ${remCalc(58)};
    right: 30px;
    width: 60%;
    border-radius: ${`0 0 ${remCalc(32)} ${remCalc(32)}`};
    ${flexCenter}
    align-items: stretch;
    padding: ${`${remCalc(32)} ${remCalc(32)}`};
    box-shadow: 0 ${`${remCalc(10)} ${remCalc(20)} ${colors.black}`};

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
  `}
`

export const Categories = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    flex-wrap: wrap;
    width: 60%;
    gap: ${remCalc(16)};
    ${flexStart}
  `}
`

export const CategoryItem = styled(UI_Link)`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.darkBlue_900};
    width: ${remCalc(150)};
    padding: ${`${remCalc(12)} ${remCalc(8)}`};
    border-radius: ${`${remCalc(8)}`};
    color: ${colors.gray_500};
    flex-basis: calc(25% - 16px);
    font-size: ${remCalc(12)};
    font-weight: bold;
    ${flexCenter}
    transition: all .3s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    border: ${`${remCalc(1)} solid ${colors.darkBlue_900}`};

    &:hover {
      color: ${colors.gray_100};
      border: ${`${remCalc(1)} solid ${colors.gray_100}`};
      box-sizing: border-box;
    }
  `}
`

export const MostView = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    width: 40%;
    overflow: hidden;
    ${flexCenter}
    border-radius: ${remCalc(20)};

    img {
      min-height: 100%;
    }
  `}
`
