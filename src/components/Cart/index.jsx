import { AnimatePresence, m } from 'framer-motion'
import { useCart } from 'src/contexts/CartContext'
import { CartForm } from './CartForm/CartForm'
import { CartLoader } from './CartLoader/CartLoader'
import { CartInvoice } from './CartInvoice/CartInvoice'
import { CartHelp } from './CartHelp/CartHelp'
import { SClose } from 'src/components/SVG/SClose'

import styles from './cart.module.scss'

export const Cart = () => {
  const { cartStep, showCart, hdlCloseCart } = useCart()

  const sectionVariants = {
    initial: {
      opacity: 0
    },
    active: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  const containerVariants = {
    initial: {
      x: 100,
      opacity: 0
    },
    active: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: 100,
      opacity: 0
    }
  }

  const trValue = {
    default: {
      type: 'just',
      duration: 0.5,
      times: [0, 0]
    }
  }

  return (
    <AnimatePresence>
      {
        showCart &&
          <m.section
            className={styles.section}
            initial='initial'
            animate='active'
            exit='exit'
            variants={sectionVariants}
            transition={trValue}
          >
            <m.div
              className={styles.container}
              variants={containerVariants}
              transition={trValue}
            >
              <SClose
                onClick={hdlCloseCart}
                className={styles.sclose}
              />
              <AnimatePresence exitBeforeEnter initial={false}>
                <m.div
                  className={styles.content}
                  key={cartStep}
                  initial='initial'
                  animate='active'
                  exit='exit'
                  variants={sectionVariants}
                  transition={trValue}
                >
                  {
                    cartStep === 1 &&
                      <CartForm />
                  }
                  {
                    cartStep === 2 &&
                      <CartLoader />
                  }
                  {
                    cartStep === 3 &&
                      <CartInvoice />
                  }
                  {
                    cartStep === 4 &&
                      <CartHelp />
                  }
                </m.div>
              </AnimatePresence>
            </m.div>
          </m.section>
      }
    </AnimatePresence>
  )
}
