import { RefObject, forwardRef, useId } from 'react'
import { useRouter } from 'next/router'
import { ISubMenu } from '../navbar/Navbar'
import { Categories, CategoryItem, Container, MostView } from './MegaMenu.style'
import { UI_ImageLoading } from '@/ui-components'

type MegaMenuProps = {
  isOpen: boolean
  data: ISubMenu[]
  onClick: (id: number) => void
}

export const MegaMenu = forwardRef(function MegaMenu(
  props: MegaMenuProps,
  ref,
): JSX.Element | null {
  const { isOpen, data, onClick } = props
  const uId = useId()
  const { query } = useRouter()

  if (!isOpen) return null
  return (
    <Container ref={ref as RefObject<HTMLDivElement> | null | undefined}>
      <Categories>
        {data?.map((item: ISubMenu) => {
          return (
            <CategoryItem
              key={`${uId}-${item.id}`}
              href={{
                pathname: '/search/',
                query: { ...query, genre: item.title },
              }}
              onClick={() => onClick(-1)}
            >
              {item.title}
            </CategoryItem>
          )
        })}
      </Categories>
      <MostView>
        <UI_ImageLoading
          src={'/images/sliders/small/1.webp'}
          width={430}
          height={210}
          style={{
            borderRadius: '30px',
          }}
        />
      </MostView>
    </Container>
  )
})
