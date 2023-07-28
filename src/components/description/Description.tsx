import { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useIntl } from 'react-intl'
import { Container, More } from './Description.style'
import { UI_Box, UI_Icon, UI_Text } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

interface Props {
  value: string
  id?: string
}

export function Description_comp(prop: Props): JSX.Element {
  const { value, id = 'description' } = prop
  const [displayAllText, setDisplayAllText] = useState(false)
  const { formatMessage } = useIntl()

  return (
    <Container displayAllText={displayAllText} id={id}>
      <UI_Box mb={48}>
        <UI_Text size={24} fontWeight='bold' as='h4' color='gray_200'>
          {formatMessage(globalMessages.movieDescription)}
        </UI_Text>
      </UI_Box>
      <UI_Text
        lineHeight={2}
        as='p'
        className='description'
        color='gray_400'
        size={16}
      >
        {value}
      </UI_Text>
      <More>
        <UI_Icon
          onClick={() => setDisplayAllText((x) => !x)}
          icon={displayAllText ? faAngleUp : faAngleDown}
          className='fa-more'
        />
      </More>
    </Container>
  )
}
