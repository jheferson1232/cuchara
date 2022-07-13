import VisibilitySensor from 'react-visibility-sensor'
/* Context */
import { useProduct } from '@contexts/ProductContext'
import { useCart } from '@contexts/CartContext'
/* Components */
import { EngageTimer } from '@components/EngageTimer'
/* SVG */
import { SDeliveryOut } from '@components/SVG/SDeliveryOut'
import { ShipDate } from '@components/ShipDate'
import { SHome } from '@components/SVG/SHome'
import { SDeliveryVann } from '@components/SVG/SDeliveryVann'
/* Utils */
import { getCurrency } from '@utils/getCurrency'

import styles from './buy.module.scss'

export const Buy = ({ customDef }) => {
  const { sethideSticky, productData, offPricesFX } = useProduct()

  const { hdlOpenCart } = useCart()

  return (
    <div className={styles.container}>
      <p className={styles.before}>{getCurrency(productData.price)}</p>
      <div className={styles.price}>
        <p>{getCurrency(offPricesFX.itemPrice)}</p>
        <span>{offPricesFX.percent}% OFF</span>
      </div>
      <div className={styles.features}>
        <span className={styles.engage}>
          <EngageTimer />
        </span>
        <div className={styles.item}>
          <SDeliveryOut />
          <h3><ShipDate customDef={customDef} /></h3>
        </div>
        <div className={styles.item}>
          <SDeliveryVann />
          <h3>Obtiene <strong>envío gratis</strong> a <strong>cualquier destino</strong> a nivel nacional</h3>
        </div>
      </div>
      <div className={styles.sepline} />
      <VisibilitySensor onChange={sethideSticky}>
        <button
          className={styles.button}
          onClick={() => { hdlOpenCart(1) }}
        >
          <SHome />
          PIDE AQUÍ Y PAGA EN CASA
        </button>
      </VisibilitySensor>
    </div>
  )
}
