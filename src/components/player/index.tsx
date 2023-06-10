import {
  faBackward,
  faForward,
  faMaximize,
  faMinimize,
  faPauseCircle,
  faPlayCircle,
  faRepeat,
  faThumbTack,
  faThumbtack,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import React from 'react'
import {
  ActionBar,
  Actions,
  Back,
  Forward,
  FullScreen,
  Loop,
  Mute,
  Pause,
  Pin,
  Play,
  Seek,
  SeekBar,
  Separator,
  Speed,
  ThumbnailImage,
  Time,
  TimeBar,
  Video,
} from './Player.style'
import { Icon } from '@/ui-components'
import { useVideo } from '@/components/player/useVideo'
import { PlayerCompProps } from '@/components/player/types'

export function PlayerComp(props: PlayerCompProps): React.JSX.Element {
  const { videoId } = props
  const {
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
  } = useVideo({ videoId })

  return (
    <>
      <Video
        ref={videoRef}
        src={src}
        id='video-player'
        onTimeUpdate={handleTimeUpdate}
        onClick={handleToggle}
        onContextMenu={(e) => {
          e.preventDefault()
          return false
        }}
      />
      <ActionBar autoHide={pinActionBar === 'isShow'}>
        <TimeBar>
          <Time>
            {videoRef.current?.currentTime
              ? moment
                  .utc(videoRef.current?.currentTime * 1000)
                  .format('HH:mm:ss')
              : '00:00'}
          </Time>
          <SeekBar
            ref={seekBarRef}
            onMouseMove={handleSeekMouseMove}
            onMouseOut={handleSeekMouseOut}
          >
            {thumbnailUrl && (
              <ThumbnailImage
                left={left.current}
                src={'data:image/jpeg;base64,' + thumbnailUrl}
                alt='Video Thumbnail'
                width={150}
                height={100}
              />
            )}
            <Seek
              type='range'
              value={String(seekTime)}
              min='0'
              max={videoRef.current ? videoRef.current.duration : 0}
              step='any'
              style={{ zIndex: 2, width: '100%', direction: 'ltr' }}
              onChange={handleSeekChange}
            />
          </SeekBar>
          <Time>
            {videoRef.current?.duration
              ? moment.utc(videoRef.current?.duration * 1000).format('HH:mm:ss')
              : '00:00'}
          </Time>
        </TimeBar>
        <Actions>
          <Loop isLoop={isLoop} onClick={handleLoopChange}>
            <Icon icon={faRepeat} />
          </Loop>
          <Pin onClick={handlePinChange}>
            <Icon
              icon={pinActionBar === 'isShow' ? faThumbtack : faThumbTack}
              {...(pinActionBar === 'isShow' ? { rotation: 90 } : {})}
            />
          </Pin>
          <FullScreen onClick={handleFullScreen}>
            <Icon icon={isFullScreen ? faMinimize : faMaximize} />
          </FullScreen>
          <Speed onClick={handleSpeedChange}>{speedNumber}x</Speed>
          <Separator />
          <Back onClick={handleBack}>
            <Icon icon={faBackward} />
            <span>10</span>
          </Back>
          {!videoRef.current || videoRef.current?.paused ? (
            <Play onClick={handlePlay}>
              <Icon icon={faPlayCircle} />
            </Play>
          ) : (
            <Pause onClick={handlePause}>
              <Icon icon={faPauseCircle} />
            </Pause>
          )}
          <Forward onClick={handleForward}>
            <span>10</span>
            <Icon icon={faForward} />
          </Forward>
          <Separator />
          <Mute onClick={() => handleMutedChange(!isMuted)}>
            <Icon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
          </Mute>
          <Seek
            type='range'
            min='0'
            max='1'
            step='0.01'
            style={{
              width: 100,
            }}
            onChange={handleVolumeChange}
          />
        </Actions>
      </ActionBar>
    </>
  )
}
