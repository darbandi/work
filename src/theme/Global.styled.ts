import { createGlobalStyle, css } from 'styled-components'
import { responsive } from './tools'

export const GlobalStyles = createGlobalStyle`
  body, html {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 1%, 16%);
    overflow-x: hidden;
    direction  : rtl;
    scroll-behavior: smooth;
    font-size: 16px;

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
`
