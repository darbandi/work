import { useRouter } from 'next/router'
import { useId } from 'react'
import { itemsArray } from '../home/topTen/TopTen.helper'
import { Filters } from './Filters.helper'
import { Container, DetailsWrapper, MoviesWrapper } from './Search.style'
import { Details_comp } from '@/components/cardSlider/Details'
import { Items_comp, ItemsArray } from '@/components/cardSlider/Item'
import { useStore } from '@/store'
import { UI_Col, UI_Row, UI_Box } from '@/ui-components'

export function Search_page(): JSX.Element {
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
                <UI_Box p={10}>
                  <Items_comp
                    id={item.id}
                    item={item}
                    key={item.id}
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
          <Details_comp />
        </DetailsWrapper>
      )}
    </Container>
  )
}
