import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import React, { KeyboardEvent, useState } from 'react'
import { useIntl } from 'react-intl'
import { FiltersContainer } from './Search.style'
import { UI_Icon, UI_InputText, UI_Text } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

export function Filters(): JSX.Element {
  const { formatMessage } = useIntl()
  const { query, replace, pathname } = useRouter()
  const [searched, setSearched] = useState(query.q?.toString())

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      replace({
        pathname,
        query: {
          ...query,
          q: searched,
        },
      })
    }
  }

  return (
    <FiltersContainer>
      <UI_Text
        color='gray_600'
        size={32}
        fontWeight='bold'
        fontFamily='Droid'
        mb={24}
        mt={24}
        as='h1'
        display='flex'
      >
        <UI_Icon icon={faFilter} color='gray_700' />
        {formatMessage(globalMessages.filters)}:
      </UI_Text>
      <UI_InputText
        placeholder={formatMessage(globalMessages.search, { other: ' ...' })}
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        onKeyDown={handleEnter}
      />
    </FiltersContainer>
  )
}
