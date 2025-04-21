"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Product = {
    id: string;
  name: string;
  price: number;
  image: string;
}

type CartItem = Product & {
    quantity: number;
}

type CartContextType = {
    cart: CartItem[],
    addToCart: (product: Product) => void,
    showCart: boolean
    removeFromCart: (id: string) => void,
    increaseQuantity: (id: string) => void,
    decreaseQuantity: (id: string) => void
    toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])
    const [showCart, setShowCart] = useState(false)

    const addToCart = (product: Product) => {
        setCart(prev => {
          const existing = prev.find(item => item.id === product.id)
          if (existing) {
            return prev.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
          return [...prev, { ...product, quantity: 1 }]
        })
      }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const increaseQuantity = (id: string) => {
        setCart(prev => 
            prev.map(item => 
                item.id === id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
        )
    }

    const decreaseQuantity = (id: string) => {
        setCart(prev => 
            prev.map(item => 
                item.id === id 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            ).filter(item => item.quantity > 0)
        )
    }

    const toggleCart = () => {
        setShowCart((prev) => !prev)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showCart, toggleCart, decreaseQuantity, increaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be inside CartProvider")
    return context
}