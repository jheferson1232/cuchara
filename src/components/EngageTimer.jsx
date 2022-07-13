import { useEffect, useState } from 'react'
import Countdown from 'countdown-js'
import dayjs from 'dayjs'

export const EngageTimer = () => {
  const [engageTime, setEngageTime] = useState({})
  useEffect(() => {
    const now = dayjs()
    const start = now.startOf('day')
    const end = now.endOf('day')
    const diff = end.diff(now, 'hour')

    const engageDate = diff < 12 ? end : start.add(12, 'hour')

    Countdown.timer(engageDate, (timeLeft) => {
      setEngageTime(timeLeft)
    })
  }, [])

  return (
    <>
      Si realiza su pedido en
      {engageTime.hours === 1
        ? ' la próxima '
        : engageTime.hours === 0
          ? ' los próximos '
          : ' las próximas '}
      <strong
        style={{ width: engageTime.hours === 0 ? '7ch' : '10ch' }}
      >
        {
          engageTime.hours > 0 && engageTime.hours + 'h '
        }
        {engageTime.minutes + 'm '}
        {engageTime.seconds + 's'}
      </strong>
    </>
  )
}
