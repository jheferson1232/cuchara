import { createContext, useContext } from 'react'

const LayoutContext = createContext()

export const LayoutProvider = (props) => {
  const value = {
    //
  }

  return <LayoutContext.Provider value={value} {...props} />
}

export const useLayout = () => {
  const context = useContext(LayoutContext)
  return context
}
