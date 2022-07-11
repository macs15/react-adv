import '../styles/custom.css'

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard'
import { products } from '../data/products'

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 5
          }}
        >
          {({ reset }) => (
            <>
              <ProductImage />
              <ProductTitle title='taza de café' />
              <ProductButtons />
              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      ))}

      {/* <aside className='shopping-cart' style={{ width: '100px' }}>
        {Object.entries(cart).map(([, product]) => (
          <ProductCard
            key={product.id}
            
            style={{ width: '100px' }}
            
          >
            <ProductImage className='custom-image' />
            <ProductButtons />
          </ProductCard>
        ))}
      </aside> */}
    </div>
  )
}
