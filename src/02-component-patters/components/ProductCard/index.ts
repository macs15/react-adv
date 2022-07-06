import { ProductCardHOCProps } from '../../interfaces/Product'
import { ProductButtons } from './Buttons'

import { ProductCard as ProductCardHOC } from './Card'
import { ProductImage } from './Image'
import { ProductTitle } from './Title'

export { ProductButtons } from './Buttons'
export { ProductImage } from './Image'
export { ProductTitle } from './Title'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})
