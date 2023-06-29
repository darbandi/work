import React from 'react'
import { useIntl } from 'react-intl'
import { Container, MenuItem, MenuItems } from './MovieMenu.style'
import { globalMessages } from '@/assets/globalMessages'
import { Separator, Text } from '@/ui-components'

const data = [
  'description',
  'userComments',
  'crew',
  'suggestions',
  'similarityMovies',
]

export function MovieMenu(): React.JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Container>
      <MenuItems>
        {data.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <Separator />}
            <MenuItem href={`#${item}`} scroll={false}>
              <Text size={18} fontWeight='400' color='gray_800'>
                {formatMessage(
                  globalMessages[item as keyof typeof globalMessages],
                )}
              </Text>
            </MenuItem>
          </React.Fragment>
        ))}
      </MenuItems>
    </Container>
  )
}
