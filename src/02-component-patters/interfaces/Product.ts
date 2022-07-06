import { ReactElement } from 'react'

export interface Props {
  product: Product
  children: ReactElement | ReactElement[]
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

export interface ProductCardHOCProps {
  ({ product, children }: Props): JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Image: ({ img, alt }: { img?: string; alt?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
