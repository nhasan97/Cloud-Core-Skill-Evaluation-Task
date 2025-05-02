"use client";

import { TProduct } from "@/src/types";
import React, { useEffect } from "react";
import ProductCardSkeleton from "../../UI/skeletons/ProductCardSkeleton";
import ProductCard from "../../UI/cards/ProductCard";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { fetchProductThunk } from "@/src/redux/slices/productSlice";
import NoData from "../../shared-components/NoData";

const DisplayProducts = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(fetchProductThunk());
  }, [dispatch]);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {status === "loading" ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
      ) : products?.length > 0 ? (
        products?.map((product: TProduct) => (
          <ProductCard key={product.unique_id} product={product} />
        ))
      ) : (
        <NoData text="No products found" />
      )}
    </div>
  );
};

export default DisplayProducts;
