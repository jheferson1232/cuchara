import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
/* Contexts */
import { useProduct } from '@contexts/ProductContext'

import { jCl } from '@utils/jCl'

/* Styles */
import styles from './carousel.module.scss'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

export const Carousel = ({ className, bgColor }) => {
  const { productData: { images } } = useProduct()

  return (
    <section
      className={jCl(styles.section, className)}
    >
      <Swiper
        loop
        grabCursor
        pagination
        modules={[Pagination]}
        className={styles.swiper}
      >
        {
          images.map((image, i) =>
            <SwiperSlide key={i}>
              <div className={styles.cont}>
                <div className={styles.image}>
                  <Image
                    priority={i === 0}
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 400px) 400px, 1000px'
                    alt='Guantes de compresión'
                    quality={70}
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  )
}
