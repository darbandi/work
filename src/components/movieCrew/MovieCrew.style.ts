import styled, { css } from 'styled-components'
import {
  ThemeType,
  flexCenter,
  flexSpaceBetween,
  flexStart,
  responsive,
} from '@/theme'
import { UI_Link } from '@/ui-components'

export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin: 0 auto;
    width: 100%;
    padding: ${remCalc(94)};
    background-color: ${colors.gray_400};

    ${responsive(
      'sm',
      css`
        padding: ${remCalc(50)};
      `,
    )}
  `}
`
export const Items = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexStart}
    width: 100%;
    gap: ${remCalc(54)};
    flex-wrap: wrap;
  `}
`
export const Item = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    flex-basis: calc(25% - ${remCalc(41)});
    ${responsive(
      'lg',
      css`
        /* flex-basis: calc(25% - ${remCalc(41)}); */
        flex-basis: calc(33.3% - ${remCalc(36)});
      `,
    )}
    ${responsive(
      'md',
      css`
        /* flex-basis: calc(33.3% - ${remCalc(36)}); */
        flex-basis: calc(50% - ${remCalc(27)});
      `,
    )}

  ${responsive(
      'sm',
      css`
        flex-basis: calc(50% - ${remCalc(27)});
      `,
    )}
  ${responsive(
      'xs',
      css`
        flex-basis: 100%;
      `,
    )}
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    position: relative;
    border-radius: ${remCalc(8)};
    img {
      transition: all 0.3s;
      box-shadow: 0 0 5px ${colors.gray_700};
      border-radius: ${remCalc(8)};
    }
    &:hover {
      img {
        box-shadow: 0 0 15px ${colors.black};
        transform: translateY(-10px);
      }
    }
  `}
`
export const Footer = styled.div`
  ${flexSpaceBetween}
`
export const JobPosition = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    position: absolute;
    bottom: ${remCalc(32)};
    right: -10px;
    background-color: ${colors.red_900};
    border-radius: ${remCalc(8)};
    border-top-right-radius: 0;
    padding: ${`${remCalc(4)} ${remCalc(12)}`};
    box-shadow: -1px 0 5px ${colors.black};
    z-index: 1;

    &::after {
      position: absolute;
      right: -10px;
      top: -7px;
      content: '';
      width: 0;
      height: 0;
      z-index: 1;
      border-top: 7px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid ${colors.black};
    }
  `}
`
export const Button = styled(UI_Link)`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    cursor: pointer;
    background-color: ${colors.black};
    border-radius: ${remCalc(8)};
    padding: ${`${remCalc(4)} ${remCalc(12)}`};
    ${flexCenter}
  `}
`
