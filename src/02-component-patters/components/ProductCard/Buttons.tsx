import { useCallback } from 'react'
import styles from '../../styles/styles.module.css'

import { useProductContext } from './context'

export const ProductButtons = () => {
  const { increaseBy, counter, maxCount } = useProductContext()

  const isMaxCountReached = useCallback(() => maxCount === counter, [counter, maxCount])

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxCountReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  )
}
