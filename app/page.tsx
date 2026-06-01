"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/redux/data/products";

export default function ProductsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
