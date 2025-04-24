"use client"
import { Hero } from "../components/Hero";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
};

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const fetchProducts = async () => {
      const res = await fetch("/api/products", { cache: "no-store" });
      const data = await res.json();
      setProducts(data);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <main>
      <Hero />
      <p className="text-5xl font-bold text-center my-5">Our Products</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }
      </div>
    </main>
  );
}
