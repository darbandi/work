import React from 'react'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Actions } from './WatchDetailsButtons.style'
import { UI_ContainedButton, UI_Icon } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

type WatchDetailsButtonsProps = {
  id: string
  isDisabledDetailsButton?: boolean
}

export function WatchDetailsButtons(
  props: WatchDetailsButtonsProps,
): JSX.Element {
  const { push } = useRouter()
  const { id, isDisabledDetailsButton } = props
  const { formatMessage } = useIntl()

  const handleClickWatch = () => push(`/watch/${id}`)
  const handleClickMovie = () => push(`/movie/${id}`)

  return (
    <Actions>
      <UI_ContainedButton
        variant='primary'
        onClick={handleClickWatch}
        lineHeight={12}
      >
        <UI_Icon icon={faPlay} />
        {formatMessage(globalMessages.play)}
      </UI_ContainedButton>
      {!isDisabledDetailsButton && (
        <UI_ContainedButton variant='secondary' onClick={handleClickMovie}>
          <UI_Icon icon={faInfoCircle} />
          {formatMessage(globalMessages.detail)}
        </UI_ContainedButton>
      )}
    </Actions>
  )
}
