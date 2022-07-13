import { jCl } from '@utils/jCl'
import { SC5Stars } from '@components/SVG/SC5Stars'
import Image from 'next/image'

import styles from './ritem.module.css'

export const RItem = ({ data, rtl }) => {
  const { name, from, avatar, image, body } = data

  return (
    <div className={`${styles.container} ${rtl ? styles.cont_rtl : ''}`}>
      <div className={styles.person}>
        <div className={styles.avatar}>
          <Image
            src={avatar}
            layout='fill'
            alt='profile image'
            objectFit='cover'
            sizes='50px'
          />
        </div>
        <div style={{ width: '100%' }}>
          <h3 className={jCl('typo-p', styles.name)}>{name}</h3>
          <SC5Stars className={styles.sc5} />
        </div>
      </div>
      <div className={styles.image}>
        <Image src={image} layout='fill' alt='review image' objectFit='cover' sizes='150px' />
      </div>
      <p className={jCl('typo-p', styles.body)}>
        {body} - <strong>{from}</strong>
      </p>
    </div>
  )
}
