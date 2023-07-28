import { css } from 'styled-components'

const animationTime = '0.3s ease-in-out'

export const animationFadeIn = css`
  animation: fade-in ${animationTime};

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

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
export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`
export const flexCenter = css`
  ${flex}
  align-items: center;
  justify-content: center;
`
export const flexSpaceBetween = css`
  ${flexAlignCenter}
  justify-content: space-between;
`
export const flexEnd = css`
  ${flexAlignCenter}
  justify-content: end;
`
export const flexStart = css`
  ${flexAlignCenter}
  justify-content: start;
`
export const flexColStartCenter = css`
  ${flex}
  align-items: start;
  justify-content: center;
  flex-direction: column;
`

export const spinner = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    background-image: url('/images/global/loading_light.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26%;
    animation: spinX 3s infinite;
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 0;
  }

  img {
    z-index: 0;
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @keyframes spinX {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
