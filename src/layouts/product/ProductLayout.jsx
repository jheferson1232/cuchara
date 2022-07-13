import Head from 'next/head'
import { CartProvider } from 'src/contexts/CartContext'
/* Layout Components */
import { HeaderMessage } from '@components/HeaderMessage'
import { Footer } from '@layouts/Footer/Footer'
import { StickyBottom } from '@layouts/StickyBottom/StickyBottom'
import { WhyUs } from '@layouts/WhyUs/WhyUs'
/* Componets */
import { Cart } from '@components/Cart'

import { config } from '@data/config'

export const ProductLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} | {config.storeName}</title>
      </Head>
      <CartProvider>
        <HeaderMessage />
        <main>
          {children}
        </main>
        <WhyUs />
        <Footer />
        <StickyBottom />
        <Cart />
      </CartProvider>
    </>
  )
}
