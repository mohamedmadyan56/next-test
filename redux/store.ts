import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import brandsSlice from "./features/brands/brandsSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    brands: brandsSlice,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;