import React from 'react'

export interface Props {
  product: Product
  // children: ReactElement | ReactElement[]
  children: (props: ProductCardHandlers) => JSX.Element
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface onChangeArgs {
  product: Product
  count: number
}
export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  product: Product
  counter: number
  increaseBy: (value: number) => void
  maxCount?: number
}

export interface ProductTitleProps {
  title?: string
  className?: string
}

export interface ProductImageProps {
  img?: string
  alt?: string
  style?: React.CSSProperties
  className?: string
}

export interface ProductCardHOCProps {
  ({ product, children, style }: Props): JSX.Element
  Title: ({ title }: ProductTitleProps) => JSX.Element
  Image: ({ img, alt }: { img?: string; alt?: string }) => JSX.Element
  Buttons: () => JSX.Element
}

export interface ProductInCart extends Product {
  count: number
}

export interface Cart {
  [key: string]: ProductInCart
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}
