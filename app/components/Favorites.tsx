"use client"

import { useFavorites } from "@/app/context/FavoritesContext";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";

export function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowFavorites(!showFavorites)}
        className="relative cursor-pointer"
      >
        <GrFavorite className="text-red-600" />
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {favorites.length}
          </span>
        )}
      </button>

      {showFavorites && (
        <div className="fixed top-0 right-0 w-3/4 md:w-1/3 h-full bg-gray-700 p-4 shadow-lg overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className=" font-semibold">Favorites</h2>
            <button
              onClick={() => setShowFavorites(false)}
              className="text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>

          {favorites.length === 0 ? (
            <p>No favorites yet</p>
          ) : (
            <ul className="space-y-4">
              {favorites.map((item) => (
                <li key={item.id} className="flex items-center gap-4 border p-2 rounded-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(item)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
