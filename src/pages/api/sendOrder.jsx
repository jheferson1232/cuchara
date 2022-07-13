import FormData from 'form-data'
import { shipData } from 'src/data/shipData'

import { getCurrency } from '@utils/getCurrency'

const sendOrder = async ({ body }, res) => {
  try {
    const date = new Date()

    const onlyName = body.fName.split(' ')[0]

    const userData = {
      'Nombre y Apellidos': body.fName,
      'Número telefónico': body.fPhone,
      Ciudad: body.fCity,
      Dirección: body.fStreet,
      Unidades: body.units,
      Variante: body?.variant || '',

      Departamento: shipData[body.fState].departamento,
      Precio: getCurrency(body.finalPrice),
      Fecha: date.toLocaleString('en-GB', { timeZone: 'America/Bogota' })
    }

    /* Send PushOver Notification */
    process.env.NODE_ENV === 'production' &&
    fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: process.env.PUSH_TOKEN,
        user: process.env.PUSH_USER,
        message: `${userData.Precio} | ${onlyName} ha comprado x${body.units} ${body.product}`
      })
    })

    const getFormData = object => Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key])
      return formData
    }, new FormData())

    /* Send order to Sheets */
    await fetch(`https://script.google.com/macros/s/${body.sheet_exec}/exec`, {
      method: 'POST',
      body: getFormData(userData)
    })

    res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'internal error' })
  }
}

export default sendOrder
