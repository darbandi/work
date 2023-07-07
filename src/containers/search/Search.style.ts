import styled, { css } from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

export const Container = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    padding-top: ${remCalc(120)};
  `}
`
export const FiltersContainer = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexCenter}
    gap: ${remCalc(24)};
    padding: ${remCalc(50)};
  `}
`
export const DetailsWrapper = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding-right: ${remCalc(20)};
  `}
`
export const MoviesWrapper = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background-color: ${colors.darkBlue_900};
    padding: ${remCalc(50)};
  `}
`
