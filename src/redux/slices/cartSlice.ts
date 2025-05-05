import { TCartItem, TCartState } from "@/src/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addItemToCart: (currentState, action: PayloadAction<TCartItem>) => {
      currentState?.cartItems.push(action.payload);
    },

    editItemQty: (
      currentState,
      action: PayloadAction<{ id: number; qty: number }>
    ) => {
      const matchedProduct = currentState.cartItems.find(
        (item) => item.id === action.payload.id
      );

      matchedProduct!.qty = action.payload.qty;
    },

    removeItemFromCart: (currentState, action: PayloadAction<number>) => {
      currentState.cartItems = currentState.cartItems.filter(
        (item) => item?.id !== action.payload
      );
    },

    removeAllItemsFromCart: (currentState) => {
      currentState.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  editItemQty,
  removeItemFromCart,
  removeAllItemsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
