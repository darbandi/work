import Image from 'next/image'
import styled, { css } from 'styled-components'
import { ThemeType, flexAlignCenter, flexCenter } from '@/theme'

type ActionBarType = { autoHide: boolean }

export const ActionBar = styled.div<ActionBarType>`
  ${({
    theme: { colors, remCalc },
    autoHide,
  }: ThemeType & ActionBarType) => css`
    background: ${colors.black};
    position: fixed;
    left: 0;
    bottom: -${remCalc(70)};
    right: 0;
    height: auto;
    z-index: 1;
    ${flexAlignCenter}
    flex-direction: column;
    transition: all 0.3s;

    &:hover {
      bottom: 0;
    }

    ${autoHide &&
    css`
      bottom: 0;
    `}
  `}
`
export const SeekBar = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    position: relative;
    height: ${remCalc(30)};
    width: 100%;
    padding: 0;
  `}
`
export const Actions = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    direction: ltr;
    ${flexCenter}
    padding: ${remCalc(8)};
    padding-bottom: ${remCalc(16)};
    gap: ${remCalc(24)};
    width: 100%;
  `}
`
export const Button = styled.button`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
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
      color: ${colors.gray_600};
      font-size: ${remCalc(40)};
    }
  `}
`
export const SmallButton = styled(Button)`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    color: ${colors.gray_600};
    .svg-inline--fa {
      font-size: ${remCalc(20)};
    }
  `}
`
export const TimeBar = styled.div`
  direction: ltr;
  width: 100%;
  ${flexAlignCenter}
`
export const Time = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    width: ${remCalc(100)};
    text-align: center;
    color: ${colors.gray_100};
  `}
`

type LoopType = { isLoop: boolean }

export const Loop = styled(SmallButton)<LoopType>`
  ${({ theme: { colors, remCalc }, isLoop }: ThemeType & LoopType) => css`
    position: relative;
    ${!isLoop &&
    css`
      opacity: 0.5;
      &:after {
        position: absolute;
        width: ${remCalc(1)};
        height: ${remCalc(30)};
        content: '';
        top: -${remCalc(5)};
        left: ${remCalc(10)};
        background-color: ${colors.gray_500};
        transform: rotate(-45deg);
      }
    `}
  `}
`
type ThumbnailImageType = {
  left: string | number | undefined
}

export const ThumbnailImage = styled(Image)<ThumbnailImageType>`
  ${({ theme: { remCalc }, left }: ThemeType & ThumbnailImageType) => css`
    position: absolute;
    bottom: ${remCalc(20)};
    border-radius: ${remCalc(4)};
    box-shadow: 0 0 5px black;

    ${left &&
    css`
      left: ${left}px;
    `}
  `}
`
export const Video = styled.video`
  width: 100%;
  height: 100%;
`
const lightButton = css`
  ${({ theme: { colors } }: ThemeType) => css`
    .svg-inline--fa {
      color: ${colors.gray_400};
    }
  `}
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
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexAlignCenter}
    gap: ${remCalc(4)};
    ${lightButton}
  `}
`
export const Forward = styled(SmallButton)`
  ${({ theme: { remCalc } }: ThemeType) => css`
    ${flexAlignCenter}
    gap: ${remCalc(4)};
    ${lightButton}
  `}
`
export const UI_Separator = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    width: ${remCalc(2)};
    height: ${remCalc(16)};
    background-color: ${colors.white};
    position: relative;
    opacity: 0.1;
    margin: 0 ${remCalc(10)};
  `}
`
export const Mute = styled(SmallButton)``
export const Seek = styled.input`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    -webkit-appearance: none;
    width: 100%;
    height: ${remCalc(3)};
    border-radius: ${remCalc(3)};
    background: ${colors.gray_600};
    outline: none;
    opacity: 0.5;
    transition: all 0.3s;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: ${remCalc(10)};
      height: ${remCalc(10)};
      border-radius: 50%;
      background: ${colors.gray_300};
      cursor: pointer;

      transition: all 0.3s;
    }

    &::-moz-range-thumb {
      width: ${remCalc(25)};
      height: ${remCalc(25)};
      border-radius: 50%;
      background: ${colors.black};
      cursor: pointer;
    }

    &:hover {
      opacity: 1;
    }
  `}
`
