import '../styles/custom.css'

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard'
import { products } from '../data/products'
import useCart from '../hooks/useCart'

export const ShoppingPage = () => {
  const { cart, onProductCartChange } = useCart()

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          value={cart[product.id]?.count}
          onChange={onProductCartChange}
        >
          <ProductImage />
          <ProductTitle title='taza de café' />
          <ProductButtons />
        </ProductCard>
      ))}

      <aside className='shopping-cart' style={{ width: '100px' }}>
        {Object.entries(cart).map(([, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            style={{ width: '100px' }}
            onChange={onProductCartChange}
            value={product.count}
          >
            <ProductImage className='custom-image' />
            <ProductButtons />
          </ProductCard>
        ))}
      </aside>
    </div>
  )
}
