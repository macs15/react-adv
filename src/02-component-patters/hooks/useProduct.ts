import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/Product'

interface UseProductProps {
  onChange?: (args: onChangeArgs) => void
  product: Product
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductProps) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      onChange!({ product, count: value })
      return
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}
