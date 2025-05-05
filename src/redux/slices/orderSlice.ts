/* eslint-disable @typescript-eslint/no-explicit-any */
import { placeOrder } from "@/src/services/orderServices/placeOrder";
import { TOrderState } from "@/src/types/order";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TOrderState = {
  loading: false,
  success: false,
  error: null,
  orderData: null,
};

export const placeOrderThunk = createAsyncThunk(
  "order/place-order",
  placeOrder
);

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    placeOrder: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrderThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(
        placeOrderThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = true;
          state.orderData = action.payload;
        }
      )
      .addCase(
        placeOrderThunk.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload;
        }
      );
  },
});

export default orderSlice.reducer;
