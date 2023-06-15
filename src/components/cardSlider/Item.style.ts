import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const InfoStyle = styled.div`
  padding-top: ${({ theme }: ThemeType) => theme.remCalc(4)};
  direction: ${({ theme }: ThemeType) => theme.direction};
`
export const TitleStyle = styled.a`
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(20)};
  display: flex;
  justify-content: start;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
`
export const ItemWrapper = styled.div``
