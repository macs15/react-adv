import { useProduct } from '../../hooks/useProduct'
import styles from '../../styles/styles.module.css'
import { Props } from '../../interfaces/Product'
import { ProductContext } from './context'

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <ProductContext.Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  )
}
