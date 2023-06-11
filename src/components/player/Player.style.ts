import Image from 'next/image'
import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const ActionBar = styled.div<{ autoHide: boolean }>`
  background: ${({ theme }: ThemeType) => theme.colors.secondary};
  position: fixed;
  left: 0;
  bottom: -70px;
  right: 0;
  height: auto;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    bottom: 0;
  }

  ${({ autoHide }) =>
    autoHide &&
    css`
      bottom: 0;
    `}
`
export const SeekBar = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
  padding: 0;
`
export const Actions = styled.div`
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  padding-bottom: 16px;
  gap: 24px;
  width: 100%;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.bg_main};
    font-size: 40px;
  }
`
export const SmallButton = styled(Button)`
  color: white;
  .svg-inline--fa {
    font-size: 20px;
  }
`
export const TimeBar = styled.div`
  direction: ltr;
  width: 100%;
  display: flex;
  align-items: center;
`
export const Time = styled.div`
  width: 100px;
  text-align: center;
  color: white;
`
export const Loop = styled(SmallButton)<{ isLoop: boolean }>`
  position: relative;
  ${({ isLoop }) =>
    !isLoop &&
    css`
      opacity: 0.5;
      &:after {
        position: absolute;
        width: 1px;
        height: 30px;
        content: '';
        top: -5px;
        left: 10px;
        background-color: white;
        transform: rotate(-45deg);
      }
    `}
`
export const ThumbnailImage = styled(Image)<{
  left: string | number | undefined
}>`
  position: absolute;
  bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 0 5px black;

  ${({ left }) =>
    left &&
    css`
      left: ${left}px;
    `}
`
export const Video = styled.video`
  width: 100%;
  height: 100%;
`
export const Speed = styled(SmallButton)``
export const FullScreen = styled(SmallButton)``
export const Pin = styled(SmallButton)``
export const Play = styled(Button)``
export const Pause = styled(Button)``
export const Stop = styled(Button)``
export const Back = styled(SmallButton)`
  display: flex;
  align-items: center;
  gap: 4px;
`
export const Forward = styled(SmallButton)`
  display: flex;
  align-items: center;
  gap: 4px;
`
export const Separator = styled.div`
  width: 2px;
  height: 16px;
  background-color: white;
  position: relative;
  opacity: 0.1;
  margin: 0 10px;
`
export const Mute = styled(SmallButton)``
export const Seek = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: white;
  outline: none;
  opacity: 0.5;
  transition: all 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    cursor: pointer;

    transition: all 0.3s;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  &:hover {
    opacity: 1;
  }
`
