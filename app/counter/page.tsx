"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/features/counterSlice";

export default function CounterPage() {
  const dispatch = useDispatch();

  const count = useSelector(
    (state:any) => state.counter.count
  );

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}