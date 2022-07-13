import { useCart } from '@contexts/CartContext'
import { useProduct } from '@contexts/ProductContext'
import { getCurrency } from '@utils/getCurrency'
import Image from 'next/image'

import styles from './buymore.module.scss'

export const BuyMore = () => {
  const {
    offPrices, changePPState,
    productData: { defs, price }
  } = useProduct()
  const { hdlOpenCart } = useCart()

  const prices = {
    after1: getCurrency(price),
    now1: getCurrency(offPrices[0].itemPrice),
    youSave1: getCurrency(offPrices[0].discounted),
    after2: getCurrency(price * 2),
    now2: getCurrency(offPrices[1].itemPrice * 2),
    youSave2: getCurrency(offPrices[1].discounted * 2)
  }

  const handleBuy = (u) => () => {
    changePPState('units', u)
    hdlOpenCart(1)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.image}>
            <div className={styles.image_wrapper}>
              <Image
                alt={`1 ${defs[0]}`}
                src='https://monavy.sfo3.cdn.digitaloceanspaces.com/photo1.png'
                layout='fill'
                quality={80}
                sizes='100px'
                objectFit='cover'
              />
            </div>
            <div className={styles.offerpnt}>
              <div>
                <span>{offPrices[0].percent}%</span>Dscto
              </div>
            </div>
          </div>
          <h4>1 {defs[0]}</h4>
          <p className={styles.after}>{prices.after1}</p>
          <p className={styles.price}>{prices.now1}</p>
          <p className={styles.yousave}>
            Ahorras <strong>{prices.youSave1}</strong>
          </p>
          <button onClick={handleBuy(1)}>
            Pagar en casa
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <div className={styles.image_wrapper}>
              <Image
                alt={`2 ${defs[1]}`}
                src='https://monavy.sfo3.cdn.digitaloceanspaces.com/2pares.png'
                layout='fill'
                quality={85}
                sizes='100px'
                objectFit='cover'
              />
            </div>
            <div className={styles.offerpnt}>
              <div>
                <span>{offPrices[1].percent}%</span>Dscto
              </div>
            </div>
          </div>
          <h4>2 {defs[1]}</h4>
          <p className={styles.message}>Pide más y <strong>paga menos</strong></p>
          <p className={styles.after}>{prices.after2}</p>
          <p className={styles.price}>{prices.now2}</p>
          <p className={styles.yousave} type='2'>
            ¡Ahorras <strong>{prices.youSave2}</strong>!
          </p>
          <button onClick={handleBuy(2)}>
            Pagar en casa
          </button>
        </div>
      </div>
    </section>
  )
}
