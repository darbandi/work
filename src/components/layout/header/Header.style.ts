import styled from 'styled-components'
import { ThemeType, animationSlideInTop, flexSB } from '@/theme'

export const Header = styled.header`
  height: ${({ theme }: ThemeType) => theme.remCalc(57)};
  background: ${({ theme }: ThemeType) => theme.colors.gray_900}80;
  ${flexSB}
  padding: ${({ theme }: ThemeType) => theme.remCalc(12)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  ${animationSlideInTop}

  .fa-search {
    margin-left: ${({ theme }: ThemeType) => theme.remCalc(8)};
    cursor: pointer;
    font-size: large;
  }

  .input-search {
    height: ${({ theme }: ThemeType) => theme.remCalc(32)};
    width: ${({ theme }: ThemeType) => theme.remCalc(200)};
    margin-left: ${({ theme }: ThemeType) => theme.remCalc(8)};
    &::placeholder {
      font-weight: 300 !important;
    }

    ${animationSlideInTop}
  }
`
