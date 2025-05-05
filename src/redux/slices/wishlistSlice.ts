import { TWishlistItem, TWishlistState } from "@/src/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TWishlistState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: initialState,
  reducers: {
    addItemToWishlist: (currentState, action: PayloadAction<TWishlistItem>) => {
      currentState?.wishlistItems.push(action.payload);
    },

    removeItemFromWishlist: (currentState, action: PayloadAction<number>) => {
      currentState.wishlistItems = currentState.wishlistItems.filter(
        (item) => item?.id !== action.payload
      );
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
