import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ data, ...restProps }) => {
  const productData = data

  const [hideSticky, sethideSticky] = useState(true)
  const [pPageState, setPPageState] = useState({
    units: 1,
    variant: productData.variants?.[0] || null
  })

  const { price, discounts } = productData

  const offPrices = discounts.map(dsc => {
    const discounted = ((price * dsc) / 100).toFixed(0) * 100
    return {
      percent: dsc * 100,
      discounted,
      itemPrice: price - discounted
    }
  })

  const offPricesFX = offPrices[pPageState.units - 1] ||
  offPrices[discounts.length - 1]

  const changePPState = (k, v) => {
    setPPageState({
      ...pPageState,
      [k]: v
    })
  }

  const handleSupport = () => {
    window.gtag('event', 'boton_wsp')

    window.open(`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_SUPPORT_N}&text=Hola%2C%20deseo%20más%20informaci%C3%B3n%20sobre%20${productData.wpDef}%20por%20favor%20🙏`)
  }

  const value = {
    offPrices,
    offPricesFX,
    productData,
    pPageState,
    setPPageState,
    hideSticky,
    sethideSticky,
    changePPState,
    handleSupport
  }
  return <ProductContext.Provider value={value} {...restProps} />
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    console.log('error context')
  }
  return context
}
