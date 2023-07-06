import { createGlobalStyle, css } from 'styled-components'
import { responsive } from './tools'
import { ThemeType } from './Theme.styled'

export const GlobalStyles = createGlobalStyle`
  body, html {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 1%, 16%);
    overflow-x: hidden;
    direction  : rtl;
    scroll-behavior: smooth;
    font-size: 16px;
    background-color: ${({ theme }: ThemeType) => theme.colors.darkBlue_500};
 
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }: ThemeType) => theme.colors.gray_800};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    * {
      scrollbar-color: #ccc #f1f1f1;
      scrollbar-width: thin;
    }

    ${responsive(
      'lg',
      css`
        font-size: 16px;
      `,
    )};
    ${responsive(
      'md',
      css`
        font-size: 14px;
      `,
    )};
    ${responsive(
      'sm',
      css`
        font-size: 12px;
      `,
    )};
  }

  .blur {
    filter: blur(3px);
  }
`
