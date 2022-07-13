import Image from 'next/image'
import { useCart } from '@contexts/CartContext'
import { SDeliveryOut } from '@components/SVG/SDeliveryOut'
import { SWhatsapp } from 'src/components/SVG/SWhatsapp'
import { useProduct } from 'src/contexts/ProductContext'
import { ShipDate } from '@components/ShipDate'

/* Utils */
import { getCurrency } from '@utils/getCurrency'

import styles from './stickybottom.module.scss'

export const StickyBottom = () => {
  const {
    hideSticky, offPricesFX, handleSupport, productData: { productName, images }
  } = useProduct()
  const { hdlOpenCart } = useCart()

  return (
    <section
      className={`${styles.section} ${hideSticky ? styles.hide : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.product_image}>
            <Image
              src={images[0]}
              layout='fill'
              objectFit='cover'
              alt={images[0].alt}
              sizes='100px'
              quality={90}
            />
          </div>
          <p className={styles.product_name}>
            {productName}
          </p>
          <span className={styles.product_nowPrice}>
            {getCurrency(offPricesFX.itemPrice)}
          </span>
          <span className={styles.product_discount}>
            {offPricesFX.percent}% OFF
          </span>
          <span className={styles.product_message}>por ser nuevo comprador 🎉</span>
        </div>
        <button className={styles.chat} onClick={handleSupport}>
          <SWhatsapp /><span>Contáctenos por WhatsApp</span>
        </button>
        <div className={styles.buy}>
          <div className={styles.buy_ship}>
            <SDeliveryOut />
            <ShipDate customDef='Llega' />
          </div>
          <button
            className={styles.buy_button}
            onClick={() => hdlOpenCart()}
          >
            Pagar en casa
          </button>
        </div>
      </div>
    </section>
  )
}
