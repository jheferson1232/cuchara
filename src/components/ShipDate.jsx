import { useEffect, useState } from 'react'

export const ShipDate = ({ minDays = 2, maxDays = 4, customDef, ...props }) => {
  const [dates, setDates] = useState(false)

  const stringAddDays = (days, withMonth) => {
    const date = new window.Date()
    const addedDate = date.addDays(days)

    const stringDay = addedDate.toLocaleString('es-ES', {
      weekday: 'long',
      day: 'numeric'
    })
    const stringMonth = addedDate.toLocaleString('es-ES', {
      month: 'long'
    })

    return withMonth
      ? <><strong>{stringDay}</strong> de {stringMonth}</>
      : <strong>{stringDay}</strong>
  }

  useEffect(() => {
    window.Date.prototype.addDays = function (d) { return new Date(this.valueOf() + 864E5 * d) }

    setDates({
      min: stringAddDays(minDays),
      max: stringAddDays(maxDays, true)
    })
  }, [])

  return (
    <span
      {...props}
    >
      {customDef ?? 'El producto llegaría'} entre el {dates.min} y el {dates.max}
    </span>
  )
}
