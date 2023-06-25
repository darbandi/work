import React from 'react'
import { useIntl } from 'react-intl'
import { Container, MenuItem, MenuItems } from './MovieMenu.style'
import { globalMessages } from '@/assets/globalMessages'
import { Separator } from '@/ui-components'

export function MovieMenu(): React.JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Container>
      <MenuItems>
        <MenuItem href='#description' scroll={false}>
          {formatMessage(globalMessages.description)}
        </MenuItem>
        <Separator />
        <MenuItem href='#userComments' scroll={false}>
          {formatMessage(globalMessages.userComments)}
        </MenuItem>
        <Separator />
        <MenuItem href='#movieCrew' scroll={false}>
          {formatMessage(globalMessages.crew)}
        </MenuItem>
        <Separator />
        <MenuItem href='#suggestions' scroll={false}>
          {formatMessage(globalMessages.suggestions)}
        </MenuItem>
        <Separator />
        <MenuItem href='#similarityMovies' scroll={false}>
          {formatMessage(globalMessages.similarityMovies)}
        </MenuItem>
      </MenuItems>
    </Container>
  )
}
