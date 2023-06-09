import axios from 'axios'
import {
  ChangeEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  UseVideoOutput,
  UseVideoInput,
  SpeedsType,
} from '@/components/player/types'
import { useDocument } from '@/hooks'

export function useVideo(inputs: UseVideoInput): UseVideoOutput {
  const { videoId } = inputs
  const src = `/api/video/?videoId=${videoId}`
  const videoRef = useRef<HTMLVideoElement>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const [seekTime, setSeekTime] = useState<SetStateAction<number>>(0)
  const timeout = useRef<NodeJS.Timeout>()
  const left = useRef<number>()
  const seekBarRef = useRef<HTMLDivElement>(null)
  const [, setIsLoaded] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const [pinActionBar, setPinActionBar] = useState<string>(
    (localStorage.getItem('pinActionBar') as string) || 'isShow',
  )
  const { hideScroll, fullscreen, isFullscreen } = useDocument()

  const [speedNumber, setSpeedNumber] = useState<number>(1)

  const handlePlay = () => {
    videoRef.current?.play()
  }

  const handlePause = () => {
    videoRef.current?.pause()
  }

  const handleToggle = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }

  const handleMutedChange = (value: boolean) => {
    if (videoRef.current) {
      videoRef.current.muted = value
      setIsMuted(value)
    }
  }

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = Number(event.target.value)
      if (Number(event.target.value) === 0) {
        handleMutedChange(true)
      }
      if (Number(event.target.value) > 0) {
        handleMutedChange(false)
      }
    }
  }

  const handleLoopChange = () => {
    if (videoRef.current) {
      videoRef.current.loop = !isLoop
      setIsLoop(!isLoop)
    }
  }

  const handleTimeUpdate = () => {
    setSeekTime(Number(videoRef.current?.currentTime))
  }

  const handleSeekChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Number(event.target.value)

      setSeekTime(videoRef.current.currentTime)
    }
  }

  const handleSeekMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(async () => {
      if (seekBarRef.current) {
        const rect: DOMRect =
          seekBarRef.current?.getBoundingClientRect() as DOMRect
        const mouseX: number = event?.clientX - rect.left
        left.current = mouseX

        if (videoRef.current) {
          const currentTime =
            (mouseX * videoRef.current.duration) / (window.innerWidth - 195)

          const response = await axios.post(
            `/api/video/?time=${currentTime - 10}&videoId=${videoId}`,
          )
          setThumbnailUrl(response.data.thumbnail)
        }
      }
    }, 300)
  }

  const handleSeekMouseOut = () => {
    clearTimeout(timeout.current)
    setThumbnailUrl(null)
  }

  const handleSpeedChange = () => {
    const speeds: SpeedsType = {
      1: 2,
      2: 4,
      4: 8,
      8: 16,
      16: 1,
    }
    const _number = speeds[speedNumber as keyof typeof speeds]
    if (videoRef.current) {
      videoRef.current.playbackRate = _number
      setSpeedNumber(_number)
    }
  }

  const handleFullScreen = () => {
    if (!isFullscreen()) {
      fullscreen()
      setIsFullScreen(true)
    } else {
      fullscreen(false)
      setIsFullScreen(false)
    }
  }

  useEffect(() => {
    handlePlay()
    hideScroll()
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => {
      hideScroll(false)
    }
  }, [])

  const handleBack = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }

  const handlePinChange = () => {
    const val = pinActionBar === 'isShow' ? 'isNotShow' : 'isShow'
    setPinActionBar(val)
    localStorage.setItem('pinActionBar', val)
  }

  return {
    videoRef,
    src,
    thumbnailUrl,
    seekTime,
    isFullScreen,
    isMuted,
    pinActionBar,
    seekBarRef,
    left,
    isLoop,
    speedNumber,
    handlePlay,
    handleMutedChange,
    handlePause,
    handleToggle,
    handleVolumeChange,
    handleLoopChange,
    handleTimeUpdate,
    handleSeekChange,
    handleSeekMouseMove,
    handleSeekMouseOut,
    handleSpeedChange,
    handleFullScreen,
    handleBack,
    handleForward,
    handlePinChange,
  }
}
