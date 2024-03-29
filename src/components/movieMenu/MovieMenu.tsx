import { useIntl } from 'react-intl'
import { Fragment } from 'react'
import { Container, MenuItem, MenuItems } from './MovieMenu.style'
import { globalMessages } from '@/assets/globalMessages'
import { UI_Separator, UI_Text } from '@/ui-components'

const data = [
  'description',
  'userComments',
  'crew',
  'suggestions',
  'similarityMovies',
]

export function MovieMenu_comp(): JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Container>
      <MenuItems>
        {data.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && <UI_Separator />}
            <MenuItem href={`#${item}`} scroll={false}>
              <UI_Text size={18} fontWeight='400' color='gray_300'>
                {formatMessage(
                  globalMessages[item as keyof typeof globalMessages],
                )}
              </UI_Text>
            </MenuItem>
          </Fragment>
        ))}
      </MenuItems>
    </Container>
  )
}
