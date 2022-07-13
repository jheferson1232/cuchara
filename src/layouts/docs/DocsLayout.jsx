import Head from 'next/head'
/* Layout Components */
import { Footer } from '@layouts/Footer/Footer'
/* import { Navbar } from '@layouts/Navbar/Navbar'
 */
import { config } from '@data/config'

import styles from './docslayout.module.scss'

export const DocsLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} | {config.storeName}</title>
      </Head>
      {/* <Navbar className={styles.nav} /> */}
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  )
}
