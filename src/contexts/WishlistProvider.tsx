"use client";

import { createContext, useContext } from "react";
import { TChildren, TProduct, TWishlistContext } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toast } from "sonner";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../redux/slices/wishlistSlice";

export const WishlistContext = createContext<TWishlistContext | undefined>(
  undefined
);

const WishlistProvider = ({ children }: TChildren) => {
  const dispatch = useAppDispatch();

  const itemsInWishlist = useAppSelector(
    (currentState) => currentState?.wishlistSlice?.wishlistItems
  );

  const isItemAlreadyInWishlist = (id: number) => {
    const matchedItem = itemsInWishlist.find((item) => item?.id === id);

    if (!matchedItem) return false;

    return matchedItem;
  };

  const handleAddItemToWishlist = (product: TProduct) => {
    const matchedItem = isItemAlreadyInWishlist(product?.id);
    if (matchedItem) {
      toast.warning("Product is already in wishlist");
    }
    dispatch(addItemToWishlist(product));
    toast.success("Product successfully added to wishlist");
  };

  const handleDeleteWishlistItem = (id: number) => {
    toast.warning("Are youAre you sure?", {
      action: {
        label: "Yes, delete it",
        onClick: async () => {
          dispatch(removeItemFromWishlist(id));
          toast.success("Product removed from cart", {
            duration: 2000,
          });
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.info("Cancelled!", { duration: 2000 }),
      },
    });
  };

  const wishlistInfo: TWishlistContext = {
    itemsInWishlist,
    itemsInWishlistCount: itemsInWishlist?.length || 0,
    handleAddItemToWishlist,
    handleDeleteWishlistItem,
  };

  return (
    <WishlistContext.Provider value={wishlistInfo}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);

  if (context === undefined) {
    throw new Error("Context is invalid");
  }

  return context;
};

export default WishlistProvider;
