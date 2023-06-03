import { createGlobalStyle } from 'styled-components'

const IRANSansWeb_woff = '../assets/font/iransans/woff/IRANSansWeb_Bold.woff'
const IRANSansWeb_woff2 = '../assets/font/iransans/woff2/IRANSansWeb_Bold.woff2'
const IRANSansWeb_ttf = '../assets/font/iransans/ttf/IRANSansWeb_Bold.ttf'
const IRANSansWeb_eot = '../assets/font/iransans/eot/IRANSansWeb_Bold.eot'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  font-family: 'IRANSansWeb';
  overflow-x: hidden;
  direction  : rtl;
  scroll-behavior: smooth;
}

@font-face {
    font-weight: 200 !important;
    src: local('IRANSansWeb'), 
    url(${IRANSansWeb_woff}) format('woff'), 
    url(${IRANSansWeb_woff2}) format('woff2'), 
    url(${IRANSansWeb_ttf}) format('truetype'), 
    url(${IRANSansWeb_eot}) format('eot');
}
`
