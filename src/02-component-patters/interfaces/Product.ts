import React, { ReactElement } from 'react'

export interface Props {
  product: Product
  children: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
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
