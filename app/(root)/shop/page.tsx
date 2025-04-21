'use client';

import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
// import Image from "next/image";


type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const fetchProducts = async () => {
    const res = await fetch("/api/products", { cache: "no-store" });
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", description: "", price: "", image: "" });
      setShowModal(false);
      fetchProducts();
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-3 py-4">
        <h2 className="text-2xl font-bold">Shop Page</h2>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-3">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }
        {/* {products.map((product) => (
          <div key={product.id} className="border border-orange-500 rounded shadow-md p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="pt-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-orange-500">${product.price}</p>
            </div>
          </div>
        ))} */}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-slate-900 w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                <textarea
                  id="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  id="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  id="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
