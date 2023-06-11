import styled from 'styled-components'
import { ThemeType } from '@/theme'

export const PrevButtonsStyle = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.bg_main50};
  position: absolute;
  width: 48px;
  height: 48px;
  left: -68px;
  top: calc(50% - 48px);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.bg_main};
  }

  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.secondary};
  }
`

export const NextButtonsStyle = styled(PrevButtonsStyle)`
  left: auto;
  right: -68px;
`

export const InfoStyle = styled.div`
  padding-top: 4px;
  direction: ${({ theme }: ThemeType) => theme.direction};
`
export const TitleStyle = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.secondary};
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: start;
`

export const ActionStyle = styled.div``
export const ItemWrapper = styled.div``
export const More = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }: ThemeType) => theme.colors.text_grey};
  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.text_grey};
    font-size: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }: ThemeType) => theme.colors.secondary};
  margin-bottom: 12px;
`
export const Container = styled.div`
  margin: 0 100px;
  margin-top: 80px;

  .alice-carousel__stage {
    display: flex;
    gap: 8px;
    user-select: none;
  }

  .alice-carousel__stage-item {
    margin: 0 8px !important;
  }
`
