import { createContext, useContext } from 'react'
import { ProductContextProps } from '../../interfaces/Product'

export const ProductContext = createContext({} as ProductContextProps)

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error('useProductContext must be inside a ProductContext Provider')

  return context
}
