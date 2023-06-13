import { createGlobalStyle, css } from 'styled-components'
import { responsive } from './tools'

const IRANSansWeb_woff = '/fonts/iransans/woff/IRANSansWeb_Bold.woff'
const IRANSansWeb_woff2 = '/fonts/iransans/woff2/IRANSansWeb_Bold.woff2'
const IRANSansWeb_ttf = '/fonts/iransans/ttf/IRANSansWeb_Bold.ttf'
const IRANSansWeb_eot = '/fonts/iransans/eot/IRANSansWeb_Bold.eot'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'IranSans';
    src: url(${IRANSansWeb_woff}) format('woff'), 
    url(${IRANSansWeb_woff2}) format('woff2'), 
    url(${IRANSansWeb_ttf}) format('truetype'), 
    url(${IRANSansWeb_eot}) format('eot');
    font-weight: normal;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IranSans';
  }

  *:active, *:hover {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
  }

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
