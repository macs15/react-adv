import noImage from '../../assets/no-image.jpg'
import { ProductImageProps } from '../../interfaces/Product'
import styles from '../../styles/styles.module.css'

import { useProductContext } from './context'

export const ProductImage = ({ img = '', alt = '', style, className }: ProductImageProps) => {
  const { product } = useProductContext()
  const imgToShow = img || product.img || noImage

  return (
    <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt={alt} />
  )
}
