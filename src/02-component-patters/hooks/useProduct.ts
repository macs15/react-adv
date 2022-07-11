import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/Product'

interface UseProductProps {
  onChange?: (args: onChangeArgs) => void
  product: Product
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)

    if (typeof initialValues?.maxCount === 'number' && newValue > initialValues?.maxCount) {
      return
    }

    setCounter(newValue)
    onChange && onChange({ product, count: value })
  }

  const reset = () => setCounter(initialValues?.count || value)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    setCounter(value)
  }, [value])

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: initialValues?.maxCount === counter,

    increaseBy,
    reset
  }
}
