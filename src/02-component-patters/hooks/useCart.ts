import { useState } from 'react'
import { Cart, Product, ProductInCart } from '../interfaces/Product'

const useCart = () => {
  const [cart, setCart] = useState<Cart>({})

  const onProductCartChange = ({ product, count }: { product: Product; count: number }) => {
    setCart(oldCart => {
      const productInCart: ProductInCart = oldCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...oldCart,
          [product.id]: productInCart
        }
      }

      const newCart = structuredClone(cart)
      delete newCart[product.id]
      return newCart
    })

    // if (!count) {
    // const newCart = structuredClone(cart)
    // delete newCart[product.id]
    //   setCart(newCart)

    //   return
    // }

    // setCart({
    //   ...cart,
    //   [product.id]: { ...product, count }
    // })
  }

  return {
    cart,
    onProductCartChange
  }
}

export default useCart
