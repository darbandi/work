import styled, { css } from 'styled-components'
import { ThemeType, flex, flexStart, responsive } from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin: 0 auto;
    width: 100%;
    padding: ${remCalc(94)};
    background-color: ${colors.darkBlue_500};

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
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    flex-basis: calc(20% - ${remCalc(44)});
    border-radius: ${remCalc(24)};
    background-color: ${colors.darkBlue_900};
    box-shadow: 0 0 24px ${colors.black}b9, 0 0 7px ${colors.black}e9;

    ${responsive(
      'xlg',
      css`
        flex-basis: calc(25% - ${remCalc(41)});
      `,
    )}
    ${responsive(
      'lg',
      css`
        flex-basis: calc(33.3% - ${remCalc(36)});
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
    border-radius: ${remCalc(24)} ${remCalc(24)} 0 0;
    height: 100&;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      transition: all 0.3s;
      box-shadow: 0 0 5px ${colors.gray_700};
      border-radius: ${remCalc(24)} ${remCalc(24)} 0 0;
    }
  `}
`
export const Footer = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flex}
    flex-direction: column;
    padding: ${remCalc(24)};
    gap: ${remCalc(24)};
  `}
`
