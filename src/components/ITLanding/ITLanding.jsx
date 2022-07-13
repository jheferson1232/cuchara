import Image from 'next/image'
import { jCl } from '@utils/jCl'

import styles from './itlanding.module.scss'

export const ITLanding = (
  { imgSrc, alt = 'image', BgSrc, rtl, className, children, ...restProps }
) => {
  return (
    <div
      className={
        jCl(styles.container, rtl && styles.cont_rtl, className)
      }
      {...restProps}
    >
      <div className={styles.image_wrapper}>
        {BgSrc &&
          <Image
            src={BgSrc}
            layout='fill'
            objectFit='cover'
            alt={alt}
            sizes='(max-width: 400px) 350px, 400px'
          />}
        <Image
          src={imgSrc}
          layout='fill'
          objectFit='cover'
          alt={alt}
          sizes='(max-width: 400px) 350px, 400px'
        />
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}
