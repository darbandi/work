import styled from 'styled-components'
import { ThemeType, flexCenter } from '@/theme'

export const Container = styled.div`
  padding-top: ${({ theme }: ThemeType) => theme.remCalc(120)};
`
export const FiltersContainer = styled.div`
  ${flexCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(24)};
  padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
`
export const DetailsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-right: ${({ theme }: ThemeType) => theme.remCalc(20)};
`
export const MoviesWrapper = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_900};
  padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
`
