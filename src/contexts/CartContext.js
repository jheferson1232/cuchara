import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useProduct } from './ProductContext'

const CartContext = createContext()

export const CartProvider = (props) => {
  const { pPageState, offPricesFX, productData } = useProduct()

  const [cartStep, setCartStep] = useState(1)
  const [showCart, setShowCart] = useState(false)
  const [formFields, setFormFields] = useState({
    fName: '',
    fPhone: '',
    fState: '',
    fCity: '',
    fStreet: ''
  })

  const router = useRouter()
  const { query } = router

  useEffect(() => {
    /* Prevent scroll on back history */
    router.beforePopState(state => {
      state.options.scroll = false
      return true
    })

    router.query?.cart === '1'
      ? setShowCart(true)
      : setShowCart(false)
  }, [router])

  const sendForm = async () => {
    await window.fetch('/api/sendOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          ...formFields,
          ...pPageState,
          product: productData.productName,
          sheet_exec: productData.sheet_exec,
          finalPrice: offPricesFX.itemPrice * pPageState.units
        }
      )
    })
  }

  const hdlOpenCart = (step = 1) => {
    setCartStep(step)

    router.push({
      pathname: '',
      query: { cart: 1 }
    }, undefined, {
      scroll: false,
      shallow: true
    })
  }

  const hdlCloseCart = () => {
    router.back()
  }

  const hdlUpsell = (upsell) => {
    !upsell.active
      ? router.push({
        pathname: '',
        query: { ...query, upsell: 1 }
      }, undefined, {
        scroll: false,
        shallow: true
      })
      : router.back()
  }

  const value = {
    formFields,
    setFormFields,
    sendForm,
    cartStep,
    setCartStep,
    showCart,
    setShowCart,
    hdlOpenCart,
    hdlCloseCart,
    hdlUpsell,
    router
  }
  return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    console.log('error context')
  }
  return context
}
