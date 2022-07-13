/* Contexts */
import { useProduct } from '@contexts/ProductContext'
import { useCart } from '@contexts/CartContext'
/* Components */
import { SC5Stars } from '@components/SVG/SC5Stars'
/* Utils */
import { jCl } from '@utils/jCl'
/* Styles */
import styles from './presume.module.scss'

export const PResume = ({ className, children }) => {
  const {
    pPageState, changePPState,
    productData: {
      productName, variants, reviews
    }
  } = useProduct()

  const { hdlOpenCart } = useCart()

  return (
    <section className={jCl(styles.section, className)}>
      <h1 className={styles.title}>{productName}</h1>
      <div className={styles.reviews}>
        <SC5Stars className={styles.sc5stars} />
        <span>{reviews.length} Reseñas</span>
      </div>
      <div className={styles.children}>
        {children}
      </div>
      {
        variants &&
          <div className={styles.size}>
            <h3 className='typo-h3'>Seleccione su talla</h3>
            <div className={styles.size_options}>
              {variants.map(v =>
                <div
                  className={`${styles.size_option} ${
                pPageState.variant === v ? styles.is_selected : ''
              }`}
                  key={v}
                  onClick={() => { changePPState('variant', v) }}
                >
                  {v}
                </div>
              )}
              <u
                onClick={() => { hdlOpenCart(4) }}
              >¿No sabe su talla?
              </u>
            </div>
          </div>
      }
    </section>
  )
}
