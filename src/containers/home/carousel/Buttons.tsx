import React from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { NextButtonsStyle, PrevButtonsStyle } from './MainCarousel.style'
import { Icon } from '@/ui-components'

export function PrevButtons(): React.JSX.Element {
  return (
    <PrevButtonsStyle>
      <Icon icon={faChevronLeft} />
    </PrevButtonsStyle>
  )
}

export function NextButtons(): React.JSX.Element {
  return (
    <NextButtonsStyle>
      <Icon icon={faChevronRight} />
    </NextButtonsStyle>
  )
}
