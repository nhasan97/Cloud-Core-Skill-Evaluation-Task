import { getProducts } from "@/src/services/productServices/getProducts";
import { TProductState } from "@/src/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TProductState = {
  products: [],
  status: "idle",
  error: "",
};

export const fetchProductThunk = createAsyncThunk(
  "products/fetch",
  getProducts
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.data.data;
      })
      .addCase(fetchProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
