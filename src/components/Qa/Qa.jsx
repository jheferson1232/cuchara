import Image from 'next/image'
import { useProduct } from '@contexts/ProductContext'
import { SWhatsapp } from '@components/SVG/SWhatsapp'
import { QaItem } from './QaItem/QaItem'
import { jCl } from '@utils/jCl'

import styles from './qa.module.scss'

export const Qa = ({
  className, qaData,
  shortMessage = 'Aprenda más sobre este maravilloso producto',
  title = 'Preguntas Frecuentes', ...restProps
}) => {
  const { handleSupport } = useProduct()

  return (
    <section className={jCl(styles.section, className)} {...restProps}>
      <div className={styles.container}>
        <h2 className={jCl('typo-h2', styles.title)}>{title}</h2>
        <p className={jCl('typo-p', styles.message)}>{shortMessage}</p>
        <div className={styles.itemscont}>
          {
            qaData.map(({ q, a }, i) =>
              <QaItem q={q} a={a} key={q} iOpened={i === 0} />
            )
          }
        </div>
        <div className={styles.image}>
          <Image
            src='https://monavy.sfo3.cdn.digitaloceanspaces.com/brand-monavy/Support%20Avatars.png'
            width={172.5}
            height={77}
            layout='responsive'
            sizes='150px'
          />
        </div>
        <h3 className={jCl('typo-h3', styles.suptitle)}>¿Aún le quedaron dudas?</h3>
        <p className={jCl('typo-p', styles.supbody)}>Nuestro equipo de atención al cliente puede ayudarle a resolver todas esas dudas</p>
        <button
          className={styles.button}
          onClick={handleSupport}
        >
          <SWhatsapp />
          Contáctenos por Whatsapp
        </button>
      </div>
    </section>
  )
}
