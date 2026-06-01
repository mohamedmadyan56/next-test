import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface BrandsState {
  list: Brand[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandsState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async () => {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch brands");
    }
    const data = await res.json();
    return data.data as Brand[];
  }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default brandsSlice.reducer;
