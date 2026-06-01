"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function Navbar() {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link href="/" style={{ marginRight: "16px" }}>
        Products
      </Link>
      <Link href="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
}
