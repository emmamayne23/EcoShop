interface Product {
    id: string,
    name: string,
    description?: string,
    price: string,
    image: string
  }

export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Could not fetch Products");
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
  if (!res.ok) throw new Error("Could not fetch Product");
  return res.json();
}

export async function createProduct(data: Product) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProduct(id: string, data: Product) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteProduct(id: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    method: "DELETE",
  });
}
