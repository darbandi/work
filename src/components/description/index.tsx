import React, { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useIntl } from 'react-intl'
import { Container, More } from './Description.style'
import { Box, Icon, Text } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

interface Props {
  value: string
  id?: string
}

export function Description(prop: Props): React.JSX.Element {
  const { value, id = 'description' } = prop
  const [displayAllText, setDisplayAllText] = useState(false)
  const { formatMessage } = useIntl()

  return (
    <Container displayAllText={displayAllText} id={id}>
      <Box mb={48}>
        <Text size={24} fontWeight='bold' as='h4'>
          {formatMessage(globalMessages.movieDescription)}
        </Text>
      </Box>
      <Text lineHeight={2} as='p' className='description'>
        {value}
      </Text>
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
