import styles from '../../styles/styles.module.css'
import noImage from '../../assets/no-image.jpg'

import { useProductContext } from './context'

export const ProductImage = ({ img = '', alt = '' }) => {
  const { product } = useProductContext()
  const imgToShow = img || product.img || noImage

  return <img className={styles.productImg} src={imgToShow} alt={alt} />
}
