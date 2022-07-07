import { ReactElement } from 'react'

export interface Props {
  product: Product
  children: ReactElement | ReactElement[]
  className?: string
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

export interface ProductCardHOCProps {
  ({ product, children }: Props): JSX.Element
  Title: ({ title }: ProductTitleProps) => JSX.Element
  Image: ({ img, alt }: { img?: string; alt?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
