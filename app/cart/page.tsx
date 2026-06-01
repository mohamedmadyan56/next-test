"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import type { AppDispatch, RootState } from "@/redux/store";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main style={{ padding: "20px" }}>
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/">Go to Products</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Cart</h1>

      <table style={{ width: "100%", marginTop: "16px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Name
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Price
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Qty
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Total
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                ${item.price}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.quantity}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                ${item.price * item.quantity}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <button
                  type="button"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  style={{ marginLeft: "4px" }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ marginLeft: "8px" }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px", padding: "12px", border: "1px solid #ccc" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: "18px" }}>Cart Summary</h2>
        <p style={{ margin: "4px 0" }}>Total items: {totalItems}</p>
        <p style={{ margin: "4px 0" }}>Total price: ${totalPrice}</p>
      </div>
    </main>
  );
}
