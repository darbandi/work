import {
  ChangeEvent,
  MouseEvent,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from 'react'

export type PlayerCompProps = { videoId: string }

export type UseVideoOutput = {
  videoRef: RefObject<HTMLVideoElement>
  src: string
  thumbnailUrl: null
  seekTime: SetStateAction<number>
  isFullScreen: boolean
  isMuted: boolean
  pinActionBar: string
  seekBarRef: RefObject<HTMLDivElement>
  left: MutableRefObject<number | undefined>
  isLoop: boolean
  speedNumber: number
  handlePlay: () => void
  handleMutedChange: (value: boolean) => void
  handlePause: () => void
  handleToggle: () => void
  handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleLoopChange: () => void
  handleTimeUpdate: () => void
  handleSeekChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
  handleSeekMouseMove: (event: MouseEvent<HTMLDivElement>) => void
  handleSeekMouseOut: () => void
  handleSpeedChange: () => void
  handleFullScreen: () => void
  handleBack: () => void
  handleForward: () => void
  handlePinChange: () => void
}

export type UseVideoInput = {
  videoId: string
}

export type SpeedsType = {
  1: number
  2: number
  4: number
  8: number
  16: number
}
