import styles from '../../styles/styles.module.css'

import { useProductContext } from './context'

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useProductContext()
  return <span className={styles.productDescription}>{title || product.title}</span>
}
