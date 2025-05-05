"use client";

import { useAppSelector } from "@/src/redux/hook";
import React from "react";
import SectionHeading from "../../UI/SectionHeading";
import ProductCardSkeleton from "../../UI/skeletons/ProductCardSkeleton";
import { TCategory, TProduct } from "@/src/types";
import ProductCard from "../../UI/cards/ProductCard";
import NoData from "../../shared-components/NoData";

const RelatedProductSection = ({
  category,
  productId,
}: {
  category: TCategory;
  productId: number;
}) => {
  const { products, status } = useAppSelector((state) => state.productSlice);

  return (
    <div className="w-full h-full mb-20">
      <SectionHeading text={"Related Products"} />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {status === "loading" ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : products?.length > 0 ? (
          products
            ?.filter(
              (product: TProduct) =>
                product?.category?.name === category?.name &&
                product?.id !== productId
            )
            .map((product: TProduct) => (
              <ProductCard key={product.unique_id} product={product} />
            ))
        ) : (
          <NoData text="No related products found" />
        )}
      </div>
    </div>
  );
};

export default RelatedProductSection;
