import { useEffect, useRef, useState } from 'react'

type Props = {
  callback: (value: boolean) => void
}

export function UI_DecreaseTimer(props: Props): JSX.Element {
  const { callback } = props
  const [time, setTime] = useState(60)
  const interval = useRef<NodeJS.Timer>()

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((x) => {
        if (x <= 0) {
          clearInterval(interval.current)
          callback(false)
        }
        return x - 1
      })
    }, 1000)
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <>
      {'"'}
      {time.toString()}
    </>
  )
}
