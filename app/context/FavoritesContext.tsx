"use client"

import { useState, createContext, useContext, ReactNode } from "react"

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};


type FavoritesContextType = {
    favorites: Product[],
    toggleFavorite: (product: Product) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Product[]>([])

    const toggleFavorite = (product: Product) => {
        setFavorites((prev) => {
            const exists = prev.find((item) => item.id === product.id)

            if(exists) return prev.filter((item) => item.id !== product.id)
            return  [...prev, product]
        })
    }
    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            { children }
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if(!context) throw new Error("useFavorites must be inside FavoritesProvider")
        return context
}