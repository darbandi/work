import React, { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useIntl } from 'react-intl'
import { Container, More } from './Description.style'
import { Icon, Typography } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

interface Props {
  value: string
}

export function Description(prop: Props): React.JSX.Element {
  const { value } = prop
  const [displayAllText, setDisplayAllText] = useState(false)
  const { formatMessage } = useIntl()

  return (
    <Container displayAllText={displayAllText}>
      <Typography fontSize={24} fontWeight={'bold'} mb={48}>
        {formatMessage(globalMessages.movieDescription)}
      </Typography>
      <Typography
        className='description'
        fontSize={16}
        fontWeight={'regular'}
        lineHeight={2}
      >
        {value}
      </Typography>
      <More>
        <Icon
          onClick={() => setDisplayAllText((x) => !x)}
          icon={displayAllText ? faAngleUp : faAngleDown}
          className='fa-more'
        />
      </More>
    </Container>
  )
}
