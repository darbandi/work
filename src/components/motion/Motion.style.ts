import styled from 'styled-components'
import { animationSlideInTop } from '@/theme'

export const Motion = styled.div<{ inView: boolean }>`
  ${({ inView }) => inView && animationSlideInTop}
`
