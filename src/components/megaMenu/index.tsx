import Image from 'next/image'
import React, { RefObject, forwardRef } from 'react'
import { Categories, CategoryItem, Container, MostView } from './MegaMenu.style'

type MegaMenuProps = {
  open: boolean
}

export const MegaMenu = forwardRef(function MegaMenu(
  props: MegaMenuProps,
  ref,
): React.JSX.Element | null {
  const { open } = props

  if (!open) return null
  return (
    <Container ref={ref as RefObject<HTMLDivElement> | null | undefined}>
      <Categories>
        <CategoryItem>جنایی</CategoryItem>
        <CategoryItem>معمایی</CategoryItem>
        <CategoryItem>ورزشی</CategoryItem>
        <CategoryItem>علمی تخیلی</CategoryItem>
        <CategoryItem>اکشن</CategoryItem>
        <CategoryItem>جنگی</CategoryItem>
        <CategoryItem>بیوگرافی</CategoryItem>
        <CategoryItem>تاریخی</CategoryItem>
        <CategoryItem>کمدی</CategoryItem>
        <CategoryItem>اجتماعی</CategoryItem>
        <CategoryItem>مستند</CategoryItem>
        <CategoryItem>وسترن</CategoryItem>
        <CategoryItem>ترسناک</CategoryItem>
        <CategoryItem>ماجرایی</CategoryItem>
        <CategoryItem>درام</CategoryItem>
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
