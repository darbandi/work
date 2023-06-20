interface IUseDocumentOutput {
  hideScroll: (isTrue?: boolean) => void
  offsetTop: (id: string) => number | undefined
  blurWindow: (isTrue?: boolean) => void
  fullscreen: (isTrue?: boolean) => void
  isFullscreen: () => Element | null
  clientHeight: () => number
  innerHeight: () => number
  getElementById: (element: string) => HTMLElement | null
  getElementsByTagName: (element: string) => HTMLElement
}

export function useDocument(): IUseDocumentOutput {
  function hideScroll(isTrue = true) {
    document.documentElement.style.overflowY = isTrue ? 'hidden' : 'auto'
  }
  function offsetTop(id: string) {
    return document.getElementById(id)?.offsetTop
  }
  function blurWindow(isTrue = true) {
    if (isTrue) document.getElementsByTagName('main')[0].classList.add('blur')
    else document.getElementsByTagName('main')[0].classList.remove('blur')
  }
  function fullscreen(isTrue = true) {
    if (isTrue) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }
  function isFullscreen() {
    return document.fullscreenElement
  }
  function clientHeight() {
    return document.documentElement.clientHeight
  }
  function innerHeight() {
    return window.innerHeight
  }
  function getElementById(element: string) {
    return document.getElementById(element)
  }
  function getElementsByTagName(element: string) {
    return document.getElementsByTagName(element)[0] as HTMLElement
  }

  return {
    hideScroll,
    offsetTop,
    blurWindow,
    fullscreen,
    isFullscreen,
    clientHeight,
    innerHeight,
    getElementById,
    getElementsByTagName,
  }
}
