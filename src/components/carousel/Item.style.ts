import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const InfoStyle = styled.div`
  position: absolute;
  top: 57px;
  right: 0;
  left: 50%;
  bottom: 10px;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 88px;
  padding-inline-start: 64px;
  justify-content: start;
  direction: ${({ theme }: ThemeType) => theme.direction};
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`
export const TitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 700;
  font-size: 48px;
`
export const DescriptionStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.white};
  font-weight: 400;
  font-size: 24px;
`
export const ItemWrapper = styled.div``
