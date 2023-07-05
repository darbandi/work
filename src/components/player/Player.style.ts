import Image from 'next/image'
import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, flexCenter } from '@/theme'

export const ActionBar = styled.div<{ autoHide: boolean }>`
  background: ${({ theme }: ThemeType) => theme.colors.black};
  position: fixed;
  left: 0;
  bottom: -${({ theme }: ThemeType) => theme.remCalc(70)};
  right: 0;
  height: auto;
  z-index: 1;
  ${flexAlignCenter}
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
  height: ${({ theme }: ThemeType) => theme.remCalc(30)};
  width: 100%;
  padding: 0;
`
export const Actions = styled.div`
  direction: ltr;
  ${flexCenter}
  padding: ${({ theme }: ThemeType) => theme.remCalc(8)};
  padding-bottom: ${({ theme }: ThemeType) => theme.remCalc(16)};
  gap: ${({ theme }: ThemeType) => theme.remCalc(24)};
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
    color: ${({ theme }: ThemeType) => theme.colors.gray_600};
    font-size: ${({ theme }: ThemeType) => theme.remCalc(40)};
  }
`
export const SmallButton = styled(Button)`
  color: ${({ theme }: ThemeType) => theme.colors.gray_600};
  .svg-inline--fa {
    font-size: ${({ theme }: ThemeType) => theme.remCalc(20)};
  }
`
export const TimeBar = styled.div`
  direction: ltr;
  width: 100%;
  ${flexAlignCenter}
`
export const Time = styled.div`
  width: ${({ theme }: ThemeType) => theme.remCalc(100)};
  text-align: center;
  color: ${({ theme }: ThemeType) => theme.colors.gray_100};
`
export const Loop = styled(SmallButton)<{ isLoop: boolean }>`
  position: relative;
  ${({ isLoop }) =>
    !isLoop &&
    css`
      opacity: 0.5;
      &:after {
        position: absolute;
        width: ${({ theme }: ThemeType) => theme.remCalc(1)};
        height: ${({ theme }: ThemeType) => theme.remCalc(30)};
        content: '';
        top: -${({ theme }: ThemeType) => theme.remCalc(5)};
        left: ${({ theme }: ThemeType) => theme.remCalc(10)};
        background-color: ${({ theme }: ThemeType) => theme.colors.gray_500};
        transform: rotate(-45deg);
      }
    `}
`
export const ThumbnailImage = styled(Image)<{
  left: string | number | undefined
}>`
  position: absolute;
  bottom: ${({ theme }: ThemeType) => theme.remCalc(20)};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(4)};
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
const lightButton = css`
  .svg-inline--fa {
    color: ${({ theme }: ThemeType) => theme.colors.gray_400};
  }
`

export const Speed = styled(SmallButton)``
export const FullScreen = styled(SmallButton)``
export const Pin = styled(SmallButton)``
export const Play = styled(Button)`
  ${lightButton}
`
export const Pause = styled(Button)`
  ${lightButton}
`
export const Back = styled(SmallButton)`
  ${flexAlignCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
  ${lightButton}
`
export const Forward = styled(SmallButton)`
  ${flexAlignCenter}
  gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
  ${lightButton}
`
export const UI_Separator = styled.div`
  width: ${({ theme }: ThemeType) => theme.remCalc(2)};
  height: ${({ theme }: ThemeType) => theme.remCalc(16)};
  background-color: ${({ theme }: ThemeType) => theme.colors.white};
  position: relative;
  opacity: 0.1;
  margin: 0 ${({ theme }: ThemeType) => theme.remCalc(10)};
`
export const Mute = styled(SmallButton)``
export const Seek = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: ${({ theme }: ThemeType) => theme.remCalc(3)};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(3)};
  background: ${({ theme }: ThemeType) => theme.colors.gray_600};
  outline: none;
  opacity: 0.5;
  transition: all 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ theme }: ThemeType) => theme.remCalc(10)};
    height: ${({ theme }: ThemeType) => theme.remCalc(10)};
    border-radius: 50%;
    background: ${({ theme }: ThemeType) => theme.colors.gray_300};
    cursor: pointer;

    transition: all 0.3s;
  }

  &::-moz-range-thumb {
    width: ${({ theme }: ThemeType) => theme.remCalc(25)};
    height: ${({ theme }: ThemeType) => theme.remCalc(25)};
    border-radius: 50%;
    background: ${({ theme }: ThemeType) => theme.colors.black};
    cursor: pointer;
  }

  &:hover {
    opacity: 1;
  }
`
