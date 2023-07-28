import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { FiltersContainer } from './Search.style'
import { UI_Icon, UI_TextField, UI_Text } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'
import { inputOnChangeType, inputOnKeyDownType } from '@/types/elements'

export function Filters(): JSX.Element {
  const { formatMessage } = useIntl()
  const { query, replace, pathname } = useRouter()
  const [searched, setSearched] = useState(query.q?.toString())

  const handleEnter = (e: inputOnKeyDownType) => {
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
      <UI_TextField
        placeholder={formatMessage(globalMessages.search, { other: ' ...' })}
        value={searched}
        onChange={(e: inputOnChangeType) => setSearched(e.target.value)}
        onKeyDown={handleEnter}
        mode='light'
      />
    </FiltersContainer>
  )
}
