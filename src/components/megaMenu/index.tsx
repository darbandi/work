import Image from 'next/image'
import { RefObject, forwardRef, useId } from 'react'
import { useRouter } from 'next/router'
import { ISubMenu } from '../navbar'
import { Categories, CategoryItem, Container, MostView } from './MegaMenu.style'

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
        <Image
          src={'/images/sliders/small/1.jpg'}
          width={430}
          height={210}
          alt='work'
          style={{
            borderRadius: '30px',
          }}
        />
      </MostView>
    </Container>
  )
})
