"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Product = {
    id: string;
  name: string;
  price: number;
  image: string;
}

type CartContextType = {
    cart: Product[],
    addToCart: (product: Product) => void,
    showCart: boolean
    removeFromCart: (id: string) => void,
    toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([])
    const [showCart, setShowCart] = useState(false)

    const addToCart = (product: Product) => {
        setCart((prev) => [ ...prev, product ])
    }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const toggleCart = () => {
        setShowCart((prev) => !prev)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showCart, toggleCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be inside CartProvider")
    return context
}