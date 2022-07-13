import { useEffect, useState } from 'react'

export const getShipDate = (mn, mx) => {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    window.Date.prototype.addDays = function (d) { return new Date(this.valueOf() + 864E5 * d) }

    function stringDate (days) {
      const date = new window.Date()
      const dateP = date.addDays(days)
      const day = dateP.getDate()
      const month = dateP.toLocaleString('es-ES', { month: 'short' })
      const monthSt = month.charAt(0).toUpperCase() + month.slice(1)
      return monthSt + ' ' + day
    }

    setDates({
      min: stringDate(mn),
      max: stringDate(mx)
    })
  }, [])

  return dates
    ? dates.min + '-' + dates.max
    : 'loading'
}
