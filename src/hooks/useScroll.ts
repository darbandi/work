import { useEffect, useState } from 'react'

type UseScroll = {
  isOnScreen: boolean
  isTop: boolean
}

export function useScroll(element: string): UseScroll {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(true)

  const isElementInViewport = (el: HTMLElement | null) => {
    const rect = el?.getBoundingClientRect()
    if (!rect) return
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  const isScrollTop = (el: HTMLElement): boolean => {
    const rect = el?.getBoundingClientRect()
    return rect.top >= 0
  }

  useEffect(() => {
    const handleScroll = () => {
      const _element = document.getElementById(element)
      if (_element && isElementInViewport(_element)) {
        setIsOnScreen(true)
      }
      if (element === 'body') {
        const _element = document.getElementsByTagName(element)[0]
        setIsTop(isScrollTop(_element))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isOnScreen, isTop }
}
