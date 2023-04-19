import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { Product } from '../utils/products'

export type CartProduct = {
  amount: number
} & Product

type CartContextData = {
  cart: CartProduct[]
  addToCart: (product: Product, amount: number) => void
  removeFromCart: (productId: number) => void
  totalItems: number
}

export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const addToCart = (product: Product, amount: number) => {
    const productAlreadyInCart = cart.find((item) => item.id === product.id)

    if (productAlreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, amount: item.amount + amount }
            : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, amount }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const totalItems = useMemo(() => {
    return cart.reduce((sumAmount, product) => {
      sumAmount += product.amount
      return sumAmount
    }, 0)
  }, [cart])

  useEffect(() => {
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  )
}
