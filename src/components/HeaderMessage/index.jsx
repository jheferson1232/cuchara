import { SColombia } from '@components/SVG/SColombia'

import styles from './headermessage.module.scss'

export const HeaderMessage = () => {
  return (
    <section className={styles.section}>
      +10 mil pedidos entregados, GRACIAS COLOMBIA <SColombia />
    </section>
  )
}
