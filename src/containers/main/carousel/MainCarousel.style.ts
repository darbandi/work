import styled from 'styled-components'

export const PrevButtonsStyle = styled.div``
export const NextButtonsStyle = styled(PrevButtonsStyle)``

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
  direction: ${({ theme }) => theme.direction};
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`
export const TitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.text_main};
  font-weight: 700;
  font-size: 48px;
`
export const DescriptionStyle = styled.div`
  color: ${({ theme }) => theme.colors.text_main};
  font-weight: 400;
  font-size: 24px;
`
export const ActionStyle = styled.div``
export const ItemWrapper = styled.div``
export const Wrapper = styled.div`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    left: 60px;
    bottom: 87px;
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.bg_main50};
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bg_main};
    }

    .svg-inline--fa {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .alice-carousel__next-btn {
    position: absolute;
    left: 126px;
    bottom: 87px;
  }
`
