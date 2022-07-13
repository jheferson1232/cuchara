import { SAgent } from '@components/SVG/SAgent'
import { SCashOD } from '@components/SVG/SCashOD'
import { SShipColor } from '@components/SVG/SShipColor'

import { config } from '@data/config'

import styles from './whyus.module.scss'

export const WhyUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className='typo-h2'>¿Por qué comprar en {config.storeName}?</h2>
        <div className={styles.reasons}>
          <div className={styles.reasons_item}>
            <SShipColor />
            <h3 className='typo-h3'>Envío Gratis</h3>
            <p className='typo-p'>Todos nuestros envíos son totalmente GRATIS a todo el país</p>
          </div>
          <div className={styles.reasons_item}>
            <SCashOD />
            <h3 className='typo-h3'>Pago Contra-Entrega</h3>
            <p className='typo-p'>Sii! Te enviamos el producto y tu pagas en la comodidad de tu casa</p>
          </div>
          <div className={styles.reasons_item}>
            <SAgent />
            <h3 className='typo-h3'>Atención 24/7</h3>
            <p className='typo-p'>Nuestros agentes están listos para ayudarte las 24 horas del día y los 7 días de la semana</p>
          </div>
        </div>
      </div>
    </section>
  )
}
