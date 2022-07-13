import { Smail } from '@components/SVG/SMail'
import { SWhatsapp } from '@components/SVG/SWhatsapp'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '@data/config'

import styles from './footer.module.scss'

export const Footer = () => {
  const handleWAHelp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_SUPPORT_N}&text=Hola%20necesito%20ayuda%20por%20favor%20%F0%9F%99%8F`)
  }
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brand_image}>
            <Image
              src='/assets/logo-white.png'
              height={50}
              width={150}
              layout='responsive'
              objectFit='contain'
              sizes='100px'
              alt='logo'
            />
          </div>
          <p className='typo-p'>
            En nuestra tienda apostamos por lo útil y funcional para ayudarte a mejorar tu calidad de vida
          </p>
        </div>
        <div className={styles.help}>
          <h3 className='typo-h3'>¿Necesitas ayuda?</h3>
          <p className='typo-p'>Nuestro equipo de atención al cliente puede ayudarle con todo lo que necesites</p>
          <div className={styles.help_item}>
            <Smail />
            {config.supportEmail}
          </div>
          <div
            className={styles.help_item} onClick={handleWAHelp}
          >
            <SWhatsapp />
            Whatsapp
          </div>
        </div>
        <div className={styles.copy}>
          <div className={styles.copy_docs}>
            <Link href='/docs/terms'>
              <a>
                Términos del servicio
              </a>
            </Link>
            <Link href='/docs/policy'>
              <a>
                Políticas de Privacidad
              </a>
            </Link>
          </div>
          <span className={styles.copy_message}>Hecho con ❤️ de LATAM para el 🌎</span>
        </div>
      </div>
    </footer>
  )
}
