import { useProduct } from '../../hooks/useProduct'
import { Props } from '../../interfaces/Product'
import styles from '../../styles/styles.module.css'
import { ProductContext } from './context'

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <ProductContext.Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </ProductContext.Provider>
  )
}
