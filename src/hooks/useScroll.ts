import { useEffect, useState } from 'react'
import { useDocument } from './useDocument'

type UseScroll = {
  isOnScreen: boolean
  isTop: boolean
}

export function useScroll(element: string): UseScroll {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(true)
  const { clientHeight, innerHeight, getElementById, getElementsByTagName } =
    useDocument()

  const isElementInViewport = (el: HTMLElement | null) => {
    const rect = el?.getBoundingClientRect()
    if (!rect) return
    return rect.top >= 0 && rect.bottom <= (innerHeight() || clientHeight())
  }

  const isScrollTop = (el: HTMLElement): boolean => {
    const rect = el?.getBoundingClientRect()
    return rect.top >= 0
  }

  useEffect(() => {
    const handleScroll = () => {
      const _element = getElementById(element)
      if (_element && isElementInViewport(_element)) {
        setIsOnScreen(true)
      }
      if (element === 'body') {
        const _element = getElementsByTagName(element)
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
