import { createContext, ReactNode, useState } from 'react'
import { Product } from '../utils/products'

type CartProduct = {
  amount: number
} & Product

type CartContextData = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProduct[]>([])

  const addToCart = (product: Product) => {
    const productAlreadyInCart = cart.find((item) => item.id === product.id)

    if (productAlreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, amount: item.amount + 1 }
            : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, amount: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
