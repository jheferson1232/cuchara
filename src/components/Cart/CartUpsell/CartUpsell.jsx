import { useCart } from '@contexts/CartContext'
import { useProduct } from '@contexts/ProductContext'
import { useEffect, useState } from 'react'

import styles from './cartupsell.module.scss'

export const CartUpsell = () => {
  const { router, hdlUpsell } = useCart()

  const {
    pPageState, changePPState,
    productData: { defs, discounts }
  } = useProduct()

  const [upsell, setUpsell] = useState({
    show: pPageState.units === 1,
    active: false,
    target: pPageState.units + 1
  })

  const changeUpsell = (k, v) => {
    setUpsell({
      ...upsell,
      [k]: v
    })
  }

  useEffect(() => {
    const isUpsellActive = router.query?.upsell || false

    if (isUpsellActive) {
      changeUpsell('active', true)
      changePPState('units', upsell.target)
    } else {
      changeUpsell('active', false)
      changePPState('units', upsell.target - 1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return upsell.show &&
    <div className={styles.upsell}>
      <p>
        Lleva {upsell.target} {defs[1]} y gana un <strong>{discounts[upsell.target - 1] * 100}% de descuento</strong> en cada {defs[0]}!
      </p>
      <button
        type='button'
        className={upsell.active ? styles.upactive : ''}
        onClick={() => { hdlUpsell(upsell) }}
      >
        {!upsell.active ? 'Añadir' : 'Quitar'}
      </button>
    </div>
}
