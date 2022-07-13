/* Components */
import { Carousel } from './Carousel/Carousel'
import { PResume } from './PResume/PResume'
import { Buy } from './Buy/Buy'
/* Utils */
import { jCl } from '@utils/jCl'
/* Styles */
import styles from './pheader.module.scss'

export const PHeader = ({ children, className, customDef }) => {
  return (
    <section className={jCl(styles.section, className)}>
      <div className={styles.left}>
        <Carousel className={styles.carousel} />
      </div>
      <div className={styles.right}>
        <PResume className={styles.resume}>
          {children}
        </PResume>
        <Buy customDef={customDef} />
      </div>
    </section>
  )
}
