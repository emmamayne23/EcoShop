"use client"

import { useCart } from "../context/CartContext"
import Image from "next/image"

export function Cart() {
  const { cart, removeFromCart, showCart, toggleCart } = useCart()

  if (!showCart) return null

  return (
    <div className="fixed top-0 right-0 h-full w-3/4 max-w-md bg-gray-900 shadow-2xl z-50 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-red-500 hover:text-red-700 font-bold text-xl"
        >
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-md"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
