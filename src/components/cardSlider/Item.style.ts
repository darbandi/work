import styled, { css } from 'styled-components'
import { ThemeType, responsive } from '@/theme'

export const InfoStyle = styled.div`
  padding-top: 4px;
  direction: ${({ theme }: ThemeType) => theme.direction};
`
export const TitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.gray_800};
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: start;

  ${responsive(
    'xs',
    css`
      margin-right: 24px;
    `,
  )}
`
export const ItemWrapper = styled.div``
