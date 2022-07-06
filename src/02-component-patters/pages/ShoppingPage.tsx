import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components/ProductCard'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard product={product}>
        <ProductCard.Image img='./coffee-mug.png' />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title='taza de café' />
        <ProductButtons />
      </ProductCard>
    </div>
  )
}
