import { useRouter } from 'next/router'
import React, { useId } from 'react'
import { itemsArray } from '../home/topTen'
import { Filters } from './Filters'
import { Container, DetailsWrapper, MoviesWrapper } from './Search.style'
import { Details } from '@/components/cardSlider/Details'
import { Items, ItemsArray } from '@/components/cardSlider/Item'
import { useStore } from '@/store'
import { UI_Col, UI_Row, UI_Box } from '@/ui-components'

export function SearchPage(): JSX.Element {
  const { query } = useRouter()
  const newQ = String(query.q || '')
  const newGenre = String(query.genre || '')
  const uId = useId()

  const selectedCartSliderSection = useStore(
    (store) => store.selectedCartSliderSection,
  )

  const selected_id = selectedCartSliderSection?.split('_')[0]

  const filters = (item: ItemsArray) => {
    if (item.title.includes(newQ) && item.categories.includes(newGenre))
      return true
  }

  return (
    <Container>
      <Filters />
      <MoviesWrapper>
        <UI_Row display='table'>
          {itemsArray.filter(filters).map((item) => {
            return (
              <UI_Col key={`${uId}-${item.id}`} xs={6} sm={4} md={3} lg={2}>
                <UI_Box padding={10}>
                  <Items
                    id={item.id}
                    item={item}
                    key={item.id}
                    isDisabledLoading
                    isDisabledScroll
                    mode='light'
                  />
                </UI_Box>
              </UI_Col>
            )
          })}
        </UI_Row>
      </MoviesWrapper>
      {selected_id && (
        <DetailsWrapper>
          <Details />
        </DetailsWrapper>
      )}
    </Container>
  )
}
