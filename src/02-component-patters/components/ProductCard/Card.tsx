import { useProduct } from '../../hooks/useProduct'
import { Props } from '../../interfaces/Product'
import styles from '../../styles/styles.module.css'
import { ProductContext } from './context'

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })

  return (
    <ProductContext.Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  )
}
