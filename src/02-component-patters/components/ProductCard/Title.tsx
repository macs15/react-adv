import { ProductTitleProps } from '../../interfaces/Product'
import { useProductContext } from './context'

export const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const { product } = useProductContext()
  return (
    <span className={`{styles.productDescription} ${className}`}>{title || product.title}</span>
  )
}
