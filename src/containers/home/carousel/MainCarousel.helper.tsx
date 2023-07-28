import { Carousel_comp } from '@/components'

const itemsArray = [
  {
    id: '1',
    key: 'spiderMan',
    title: 'مرد عنکبوتی',
    subtitle: 'Spider Man',
  },
  {
    id: '2',
    key: 'matrix',
    title: 'ماتریکس',
    subtitle: 'Matrix',
  },
  {
    id: '3',
    key: 'madMax',
    title: 'مکس دیوانه',
    subtitle: 'Mad Max',
  },
]

export function MainCarousel(): JSX.Element {
  return <Carousel_comp items={itemsArray} />
}
