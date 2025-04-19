import { Hero } from "../components/Hero";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: string;
  image: string;
};

import { getProducts } from "@/lib/actions/products";
export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <Hero />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
