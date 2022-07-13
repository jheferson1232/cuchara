import styles from './pagination.module.css'

export const Pagination = ({ length, currentPage, setCurrentPage }) => {
  const nOfPages = Math.ceil(length / 4)
  const pages = Array.from({ length: nOfPages }, (_, i) => i + 1)

  return (
    <section className={styles.section}>
      {pages.map(page =>
        <a
          key={page}
          className={
            `${styles.item} ${
              currentPage === page
                ? styles.is_selected
                : ''}`
          }
          onClick={() => {
            setCurrentPage(page)
          }}
        >
          {page}
        </a>
      )}
    </section>
  )
}
