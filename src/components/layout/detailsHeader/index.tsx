import React from 'react'
import { useIntl } from 'react-intl'
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { Back, Header, Main } from './DetailsHeader.style'
import { Icon } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

export function DetailsHeader(): React.JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Header>
      <Main>
        <Icon icon={faGear} spin />
        <span>{formatMessage(globalMessages.mainPage)}</span>
      </Main>
      <Back>
        <span>{formatMessage(globalMessages.back)}</span>
        <Icon icon={faArrowLeft} />
      </Back>
    </Header>
  )
}
