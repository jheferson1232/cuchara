import { useState } from 'react'
import { useProduct } from '@contexts/ProductContext'
import { Pagination } from './Pagination/Pagination'
import { RItem } from './RItem/RItem'

import styles from './reviews.module.css'

const getPagedRevs = (page, revData) => {
  const pagedData = revData.slice(
    (page * 4 - 4),
    (page * 4)
  )
  return pagedData
}

export const Reviews = () => {
  const { productData: { reviews: { length, data } } } = useProduct()

  const [currentPage, setCurrentPage] = useState(1)

  const onViewRevs = getPagedRevs(currentPage, data)

  return (
    <section className={styles.section} id='revs'>
      <h2 className='typo-h2'>Los clientes aman instacompress®</h2>
      <div className={styles.container}>
        {
          onViewRevs.map((review, i) => {
            return (
              <RItem
                key={i}
                data={review}
                rtl={i % 2}
              />
            )
          })
        }
      </div>
      <Pagination {...{ length, currentPage, setCurrentPage }} />
    </section>
  )
}
