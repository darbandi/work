import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const InfoStyle = styled.div`
  padding-top: 4px;
  direction: ${({ theme }: ThemeType) => theme.direction};
`
export const TitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(20)};
  display: flex;
  justify-content: start;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const ItemWrapper = styled.div``
