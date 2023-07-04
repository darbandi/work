import React from 'react'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { Actions } from './WatchDetailsButtons.style'
import { ContainedButton, Icon } from '@/ui-components'

type WatchDetailsButtonsProps = {
  id: string
  isDisabledDetailsButton?: boolean
}

export function WatchDetailsButtons(
  props: WatchDetailsButtonsProps,
): JSX.Element {
  const { push } = useRouter()
  const { id, isDisabledDetailsButton } = props

  const handleClickWatch = () => push(`/watch/${id}`)
  const handleClickMovie = () => push(`/movie/${id}`)

  return (
    <Actions>
      <ContainedButton onClick={handleClickWatch}>
        <Icon icon={faPlay} color='gray_700' />
        تماشا
      </ContainedButton>
      {!isDisabledDetailsButton && (
        <ContainedButton variant='secondary' onClick={handleClickMovie}>
          <Icon icon={faInfoCircle} color='gray_700' />
          جزئیات
        </ContainedButton>
      )}
    </Actions>
  )
}
