import { useEffect } from 'react'
import { useCart } from 'src/contexts/CartContext'
import { SWhatsapp } from 'src/components/SVG/SWhatsapp'
import { useProduct } from '@contexts/ProductContext'
import { SPendingBox } from '@components/SVG/SPendingBox'

/* Utils */
import { getName } from '@utils/getName'

import styles from './popupinvoice.module.css'

export const CartInvoice = () => {
  const { formFields: { fName } } = useCart()
  const { productData: { productName }, offPricesFX, pPageState } = useProduct()

  const handleButton = () => {
    window.open(`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_SUPPORT_N}&text=Hola%2C%20deseo%20confirmar%20mi%20pedido%20por%20favor%20😄%0AMi%20nombre%20es%3A%20*${fName}*%0AEl%20pedido%20es%3A%20*${productName}*`)
  }

  useEffect(() => {
    window.gtag('event', 'lead_p', {
      value: offPricesFX.itemPrice * pPageState.units
    })

    window.fbq('track', 'PageView')
    window.fbq('track', 'Lead')
  }, [])

  return (
    <section className={styles.section}>
      <h3 className='typo-h3'>Solo un paso más</h3>
      <SPendingBox />
      <p className='typo-p'><strong>👋 Hola {getName(fName || 'Comprador')},</strong> debido al alto volumen de pedidos que estamos teniendo, necesitamos que uno de nuestros agentes confirme los detalles de tu compra</p>

      <button
        onClick={handleButton}
      >
        <SWhatsapp className={styles.swsp} />
        Confirmar por WhatsApp
      </button>
      <span className='typo-p'>
        No te tomará más de <strong>2 minutos</strong> confirmar tu pedido
      </span>
    </section>
  )
}
