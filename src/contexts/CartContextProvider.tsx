"use client";

import React, { createContext, useContext } from "react";
import { TCartContext, TCartItem, TChildren, TProduct } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addItemToCart,
  editItemQty,
  removeAllItemsFromCart,
  removeItemFromCart,
} from "../redux/slices/cartSlice";
import { toast } from "sonner";
import envConfig from "../config/envConfig";

export const CartContext = createContext<TCartContext | undefined>(undefined);

const CartContextProvider = ({ children }: TChildren) => {
  const dispatch = useAppDispatch();

  const itemsInCart = useAppSelector(
    (currentState) => currentState?.cartSlice?.cartItems
  );

  const isItemAlreadyInCart = (id: number) => {
    const matchedItem = itemsInCart.find((item) => item?.id === id);

    if (!matchedItem) return false;

    return matchedItem;
  };

  const handleAddToCart = (product: TProduct, desiredQty: number = 1) => {
    if (product.stock > 0) {
      const matchedItem = isItemAlreadyInCart(product?.id);

      if (matchedItem && matchedItem?.qty + desiredQty <= product?.stock) {
        const payload = {
          id: matchedItem?.id as number,
          qty: matchedItem?.qty + desiredQty,
        };
        dispatch(editItemQty(payload));
        toast.success("Product quantity increased in cart");
      } else if (product?.stock - desiredQty > 0) {
        const item: TCartItem = {
          id: product?.id,
          name: product?.name,
          price:
            product?.is_discount === 1
              ? product?.price - parseFloat(product?.discount_amount)
              : product?.price,
          category: product?.category?.name,
          stock: product?.stock,
          qty: desiredQty,
          image: `${envConfig.imageUrl}/${product?.image}`,
        };
        dispatch(addItemToCart(item));
        toast.success("Product successfully added to cart");
      } else if (product?.stock - desiredQty < 0) {
        toast.error("Sorry! Not enough quantity left");
      }
    } else {
      toast.error("Out of Stock");
    }
    // dispatch(removeAllItemsFromCart());
  };

  const handleEditQty = (editedQty: number, item: TCartItem) => {
    if (item?.qty + editedQty > 0 && item?.qty + editedQty <= item?.stock) {
      const payload = {
        id: item?.id as number,
        qty: item?.qty + editedQty,
      };
      dispatch(editItemQty(payload));
    } else if (item?.qty + editedQty > item?.stock) {
      toast.error("No more left");
    }
  };

  const handleDeleteCartItem = (id: number) => {
    toast.warning("Are youAre you sure? You won't be able to revert this!", {
      action: {
        label: "Yes, delete it",
        onClick: async () => {
          dispatch(removeItemFromCart(id));
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

  const totalBill = Number(
    itemsInCart
      .reduce((partialSum, item) => partialSum + item.price * item.qty, 0)
      .toFixed(2)
  );

  const cartInfo: TCartContext = {
    itemsInCart,
    itemsInCartCount: itemsInCart?.length || 0,
    totalBill,
    handleAddToCart,
    handleEditQty,
    handleDeleteCartItem,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Context is invalid");
  }

  return context;
};

export default CartContextProvider;
