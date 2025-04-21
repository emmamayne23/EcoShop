import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";
import Image from "next/image";

type Product = {
    id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleFavorite, favorites } = useFavorites();

  const isFavorited = favorites.some((item) => item.id === product.id);

  return (
    <div className="rounded-xl shadow-md p-4 relative group">
      <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-64 object-cover rounded" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={() => addToCart(product)}
          className="bg-gray-300 text-white p-1 cursor-pointer rounded hover:bg-gray-600"
        >
          🛒
        </button>
        <button
          onClick={() => toggleFavorite(product)}
          className={`p-1 rounded cursor-pointer ${isFavorited ? "bg-green-500" : "bg-gray-300"}`}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
