import styled from 'styled-components'
import { ThemeType, animationSlideInTop, flexSB } from '@/theme'

export const Header = styled.header`
  height: 57px;
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
    margin-left: 8px;
    cursor: pointer;
    font-size: large;
  }

  .input-search {
    height: 33px;
    width: 200px;
    margin-left: 8px;
    &::placeholder {
      font-weight: 300 !important;
    }

    ${animationSlideInTop}
  }
`
