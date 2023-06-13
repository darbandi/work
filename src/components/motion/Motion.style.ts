import styled, { css } from 'styled-components'
import { animationSlideInTop } from '@/theme'

export const Motion = styled.div<{ inView: boolean }>`
  ${({ inView }) =>
    inView
      ? css`
          opacity: 1;
          ${animationSlideInTop}
        `
      : css`
          opacity: 0;
        `}
`
