export type PlayerCompProps = { videoId: string }

export type UseVideoOutput = {
  videoRef: React.RefObject<HTMLVideoElement>
  src: string
  thumbnailUrl: null
  seekTime: React.SetStateAction<number>
  isFullScreen: boolean
  isMuted: boolean
  pinActionBar: string
  seekBarRef: React.RefObject<HTMLDivElement>
  left: React.MutableRefObject<number | undefined>
  isLoop: boolean
  speedNumber: number
  handlePlay: () => void
  handleMutedChange: (value: boolean) => void
  handlePause: () => void
  handleToggle: () => void
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleLoopChange: () => void
  handleTimeUpdate: () => void
  handleSeekChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => Promise<void>
  handleSeekMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void
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
