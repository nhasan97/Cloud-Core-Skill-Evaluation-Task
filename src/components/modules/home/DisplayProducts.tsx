"use client";

import { TProduct } from "@/src/types";
import React, { useEffect, useState } from "react";
import ProductCardSkeleton from "../../UI/skeletons/ProductCardSkeleton";
import ProductCard from "../../UI/cards/ProductCard";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { fetchProductThunk } from "@/src/redux/slices/productSlice";
import NoData from "../../shared-components/NoData";
import Container from "../../layouts/Container";
import { toast } from "sonner";

const DisplayProducts = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(
    (state) => state.productSlice
  );

  useEffect(() => {
    dispatch(fetchProductThunk());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <div id="product-section" className="w-full h-full py-20">
        <div></div>

        <div className="w-full h-full space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 p-5 border border-[#75757538] rounded-full"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {status === "loading" ? (
              Array.from({ length: 4 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            ) : products?.length > 0 ? (
              products
                ?.filter((product: TProduct) => product?.is_published === 1)
                .filter((product: TProduct) => {
                  return searchText.toLowerCase() === ""
                    ? product
                    : product?.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                })
                .map((product: TProduct) => (
                  <ProductCard key={product.unique_id} product={product} />
                ))
            ) : (
              <NoData text="No products found" />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DisplayProducts;
