import React from 'react'
import { useIntl } from 'react-intl'
import { Container, MenuItem } from './MovieMenu.style'
import { globalMessages } from '@/assets/globalMessages'
import { Separator } from '@/ui-components'

export function MovieMenu(): React.JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Container>
      <MenuItem href='#description' scroll={false}>
        {formatMessage(globalMessages.description)}
      </MenuItem>
      <Separator />
      <MenuItem href='#userComments' scroll={false}>
        {formatMessage(globalMessages.userComments)}
      </MenuItem>
      <Separator />
      <MenuItem href='#crew'>{formatMessage(globalMessages.crew)}</MenuItem>
      <Separator />
      <MenuItem href='#suggestions' scroll={false}>
        {formatMessage(globalMessages.suggestions)}
      </MenuItem>
      <Separator />
      <MenuItem href='#similarityMovies' scroll={false}>
        {formatMessage(globalMessages.similarityMovies)}
      </MenuItem>
    </Container>
  )
}
