"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import type { Product } from "@/redux/data/products";
import type { AppDispatch } from "@/redux/store";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        width: "220px",
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={150}
        style={{ objectFit: "cover" }}
      />
      <h3 style={{ margin: "8px 0 4px" }}>{product.name}</h3>
      <p style={{ margin: "0 0 8px" }}>${product.price}</p>
      <button type="button" onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
}
