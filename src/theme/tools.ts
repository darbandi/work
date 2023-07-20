import { css } from 'styled-components'

export const responsive = (breakpoint: string, content: any): any => {
  switch (breakpoint) {
    case 'xs':
      return css`
        @media only screen and (max-width: 576px) {
          ${content};
        }
      `
    case 'sm':
      return css`
        @media only screen and (max-width: 768px) {
          ${content};
        }
      `
    case 'md':
      return css`
        @media only screen and (max-width: 992px) {
          ${content};
        }
      `
    case 'lg':
      return css`
        @media only screen and (max-width: 1200px) {
          ${content};
        }
      `
    case 'xlg':
      return css`
        @media only screen and (max-width: 1440px) {
          ${content};
        }
      `
    case '-xs':
      return css`
        @media only screen and (min-width: 576px) {
          ${content};
        }
      `
    case '-sm':
      return css`
        @media only screen and (min-width: 768px) {
          ${content};
        }
      `
    case '-md':
      return css`
        @media only screen and (min-width: 992px) {
          ${content};
        }
      `
    case '-lg':
      return css`
        @media only screen and (min-width: 1200px) {
          ${content};
        }
      `
    case '-xlg':
      return css`
        @media only screen and (min-width: 1440px) {
          ${content};
        }
      `
    default:
      return css`
        ${content}
      `
  }
}
