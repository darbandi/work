import styled from 'styled-components'
import { animationSlideInBottom, animationSlideInTop } from '@/theme'

export const Motion = styled.div<{ inView: boolean }>`
  ${({ inView }) => (inView ? animationSlideInTop : animationSlideInBottom)}
`
