import { useState } from 'react'
import { useProduct } from 'src/contexts/ProductContext'
import Image from 'next/image'
import { shipData } from 'src/data/shipData'
import { CartUpsell } from '../CartUpsell/CartUpsell'
/* Contexts */
import { useCart } from 'src/contexts/CartContext'

/* Utils */
import { getCurrency } from '@utils/getCurrency'

import styles from './cartform.module.scss'

export const CartForm = () => {
  const { formFields, setFormFields, sendForm, setCartStep } = useCart()

  const {
    offPricesFX,
    pPageState,
    productData: { productName, defs, price, customCartImage, images }
  } = useProduct()

  const [showErrors, setShowErrors] = useState(false)

  const data = {
    itemPrice: getCurrency(offPricesFX.itemPrice),
    discounted: getCurrency(offPricesFX.discounted * pPageState.units),
    finalPrice: getCurrency(offPricesFX.itemPrice * pPageState.units)
  }

  const someInputEmpty = !formFields.fName || !formFields.fPhone || !formFields.fState || !formFields.fCity || !formFields.fStreet

  const changeFormFields = (key, value) => {
    setFormFields({
      ...formFields,
      fCity: key === 'fState' ? '' : formFields.fCity,
      [key]: value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if (someInputEmpty) {
      setShowErrors(true)
    } else {
      setCartStep(2)
      await sendForm()
      setCartStep(3)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.cart}>
        <h3 className='typo-h3'>Tu pedido</h3>
        <div className={styles.image}>
          <Image
            src={customCartImage || images[0]}
            layout='fill'
            objectFit='contain'
            quality={50}
            sizes='50px'
            alt='guantes de compresion'
          />
        </div>
        <div className={styles.name}><p>{productName}</p></div>
        <p className={styles.price}>{data.itemPrice}</p>
        <p className={styles.variant}>x{pPageState.units}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h3 className='typo-h3'>Rellena tus datos de envío</h3>
          <input
            type='text'
            className={!formFields.fName && showErrors ? styles.danger : ''}
            placeholder='Nombre y Apellidos'
            value={formFields.fName}
            onChange={(e) => { changeFormFields('fName', e.target.value) }}
            autoComplete='name'
          />
          <input
            type='tel'
            className={!formFields.fPhone && showErrors ? styles.danger : ''}
            placeholder='Número telefónico'
            value={formFields.fPhone}
            onChange={(e) => { changeFormFields('fPhone', e.target.value) }}
            autoComplete='tel'
          />
          <select
            className={
              `${!formFields.fState && showErrors
                ? styles.danger
                : !formFields.fState ? styles.light : ''}`
            }
            value={formFields.fState}
            onChange={(e) => { changeFormFields('fState', e.target.value) }}
            autoComplete='address-level1'
          >
            <option value='' disabled hidden>Departamento</option>
            {
              shipData.map((e, i) =>
                <option key={i} value={i}>{e.departamento}</option>
              )
            }
          </select>
          <select
            className={
              `${!formFields.fCity && showErrors
                ? styles.danger
                : !formFields.fCity ? styles.light : ''}`
            }
            value={formFields.fCity}
            onChange={(e) => { changeFormFields('fCity', e.target.value) }}
            autoComplete='off'
          >
            <option value='' disabled hidden>Ciudad</option>
            {
              formFields.fState
                ? shipData[formFields.fState].ciudades.map((city, i) =>
                  <option key={i} value={city}>{city}</option>)
                : <option value='' disabled>Seleccione un departamento para ver más opciones</option>
            }
          </select>
          <input
            type='text'
            className={!formFields.fStreet && showErrors ? styles.danger : ''}
            placeholder='Dirección'
            value={formFields.fStreet}
            onChange={(e) => { changeFormFields('fStreet', e.target.value) }}
            autoComplete='off'
          />
        </div>
        <CartUpsell />
        <div className={styles.taxes}>
          <div className={styles.taxes_item}>
            <p>Subtotal</p>
            <strong>{getCurrency(pPageState.units * price)}</strong>
          </div>
          <div className={styles.taxes_item}>
            <p>Descuento
              <span
                className={
                  pPageState.units > 1 ? styles.taxes_item_red : ''
                }
              >{offPricesFX.percent}%
              </span>
            </p>
            <strong> -{data.discounted}</strong>
          </div>
          <div className={styles.taxes_item}>
            <p>Coste de envío</p>
            <strong type='free'>Gratis</strong>
          </div>
          <div className={styles.taxes_item}>
            <p>Total a pagar en casa</p>
            <strong>
              <span>({pPageState.units} {pPageState.units > 1 ? defs[1] : defs[0]})</span>
              {data.finalPrice}
            </strong>
          </div>
        </div>
        {
          showErrors && someInputEmpty &&
            <p className={styles.message}>Parece que faltan algunos datos</p>
        }
        <button type='submit' className={styles.button}>
          Pagar en casa
        </button>
      </form>

    </section>
  )
}
