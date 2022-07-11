import { useProduct } from '../../hooks/useProduct'
import { Props } from '../../interfaces/Product'
import styles from '../../styles/styles.module.css'
import { ProductContext } from './context'

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues
  })

  return (
    <ProductContext.Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          product,
          increaseBy,
          isMaxCountReached,
          reset
        })}
      </div>
    </ProductContext.Provider>
  )
}
