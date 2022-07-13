import styles from './popuploader.module.css'

export const CartLoader = () => {
  return (
    <section className={styles.section}>
      <span className={styles.loader} />
      <span>Enviando datos...</span>
    </section>
  )
}
