import { css } from 'styled-components'

const animationTime = '0.3s ease-in-out'

export const animationSlideInBottom = css`
  animation: slide-in-bottom ${animationTime};

  @keyframes slide-in-bottom {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
export const animationSlideInTop = css`
  animation: slide-in-top ${animationTime};

  @keyframes slide-in-top {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const animationSlideInLeft = css`
  animation: slide-in-left ${animationTime};

  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-20%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
export const animationSlideInRight = css`
  animation: slide-in-right ${animationTime};

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(20%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const flex = css`
  display: flex;
`
export const flexCC = css`
  ${flex}
  align-items: center;
  justify-content: center;
`

export const flexSB = css`
  ${flex}
  align-items: center;
  justify-content: space-between;
`
