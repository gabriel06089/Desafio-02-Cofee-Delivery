import React, { createContext, useState } from 'react'

interface CoffeeType {
  name: string
  price: number
}

interface CartItemType extends CoffeeType {
  quantity: number
}

interface CartContextType {
  cartItems: CartItemType[]
  addToCart: (coffee: CoffeeType) => void
  removeFromCart: (coffee: CoffeeType) => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

function CartProvider({ children }: React.PropsWithChildren<{}>) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])

  const addToCart = (coffee: CoffeeType) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === coffee.name,
    )
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingCartItemIndex].quantity += 1
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { ...coffee, quantity: 1 }])
    }
  }

  const removeFromCart = (coffee: CoffeeType) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === coffee.name,
    )
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      const updatedCartItem = {
        ...cartItems[existingCartItemIndex],
        quantity: cartItems[existingCartItemIndex].quantity - 1,
      }
      if (updatedCartItem.quantity === 0) {
        updatedCartItems.splice(existingCartItemIndex, 1)
      } else {
        updatedCartItems[existingCartItemIndex] = updatedCartItem
      }
      setCartItems(updatedCartItems)
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
