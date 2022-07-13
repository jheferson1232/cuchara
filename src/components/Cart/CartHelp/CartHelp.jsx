import Image from 'next/image'
import { useState } from 'react'
import { useProduct } from '@contexts/ProductContext'

import styles from './carthelp.module.css'
import { useCart } from '@contexts/CartContext'

export const CartHelp = () => {
  const { setCartStep } = useCart()
  const {
    changePPState,
    productData: { variants, helpImage }
  } = useProduct()

  const [varActive, setVarActive] = useState('')

  const handleVariant = (v) => {
    setVarActive(v)
    changePPState('variant', v)
  }

  const handleBtn = () => {
    setCartStep(1)
  }

  return (
    <section className={styles.section}>
      <h3 className='typo-h3'>¿No sabe su talla?</h3>
      <p className='typo-p'>No se preocupe, siga las siguientes instrucciones para averiguarlo</p>
      <div className={styles.image}>
        <Image
          src={helpImage}
          layout='fill'
          objectFit='cover'
          sizes='(max-width: 500px) 300px, 400px'
          alt='Como saber tu talla de manos'
        />
      </div>
      <p>Bien, ahora seleccione su talla y podemos continuar con su pedido</p>
      <div className={styles.variant_container}>
        {variants.map(v =>
          <div
            className={
              `${styles.variant_option} ${varActive === v ? styles.variant_active : ''}`
            }
            key={v}
            onClick={() => { handleVariant(v) }}
          >
            {v}
          </div>
        )}
      </div>
      <button onClick={handleBtn}>
        Continuar
      </button>
    </section>
  )
}
