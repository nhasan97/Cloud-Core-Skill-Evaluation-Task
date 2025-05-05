/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Container from "@/src/components/layouts/Container";
import ImageSlider from "@/src/components/modules/product-details/ImageSlider";
import ProductDescriptionSection from "@/src/components/modules/product-details/ProductDescriptionSection";
import ProductInfoSection from "@/src/components/modules/product-details/ProductInfoSection";
import RelatedProductSection from "@/src/components/modules/product-details/RelatedProductSection";
import ReviewsSection from "@/src/components/modules/product-details/ReviewsSection";
import VideoSection from "@/src/components/modules/product-details/VideoSection";
import LoadingPage from "@/src/components/shared-components/LoadingPage";
import NoData from "@/src/components/shared-components/NoData";
import BreadCrumb from "@/src/components/UI/BreadCrumb";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { fetchProductThunk } from "@/src/redux/slices/productSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(
    (currentState) => currentState.productSlice
  );

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProductThunk());
    }
  }, [dispatch, products?.length]);

  const matchedProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (error) {
    toast.error(error);
  }

  return (
    <div className="w-full min-h-screen pt-18">
      <BreadCrumb />

      <Container>
        {status === "loading" ? (
          <LoadingPage />
        ) : matchedProduct?.is_published ? (
          <div className="space-y-28">
            <div className="w-full flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <ImageSlider productImages={matchedProduct?.product_images} />
              </div>

              <div className="w-full md:w-1/2">
                <ProductInfoSection product={matchedProduct} />
              </div>
            </div>

            {matchedProduct?.video ? (
              <VideoSection video={matchedProduct?.video as string} />
            ) : (
              ""
            )}

            <ProductDescriptionSection
              description={matchedProduct?.short_desc}
            />

            <ReviewsSection />

            <RelatedProductSection
              category={matchedProduct?.category}
              productId={matchedProduct?.id}
            />
          </div>
        ) : (
          <NoData text="Sorry! Product Not Found." />
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
