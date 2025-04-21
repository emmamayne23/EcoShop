"use client"
import { Hero } from "../components/Hero";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
};

import { getProducts } from "@/lib/actions/products";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(); 
      setProducts(products)
    }

    fetchProducts()
  }, [])
  return (
    <main>
      <Hero />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }
      </div>
    </main>
  );
}
