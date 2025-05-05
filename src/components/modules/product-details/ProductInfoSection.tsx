import React, { useState } from "react";
import { TProduct } from "@/src/types";
import { calculateDiscountPercentage } from "@/src/utils/calculateDiscountPercentage";
import {
  FaCartPlus,
  FaHeartCirclePlus,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import { toTitleCase } from "@/src/utils/toTitleCase";
import "../../../styles/badge.css";

const ProductInfoSection = ({ product }: { product: TProduct }) => {
  const [desiredQty, setDesiredQty] = useState<number>(0);

  return (
    <div className="w-full h-full space-y-12">
      <div className="space-y-1">
        <h1 className="text-3xl lg:text-4xl text-[#202634] font-semibold">
          {toTitleCase(product?.name)}
        </h1>

        <p className="badge-primary-style bg-gray-500 text-white">
          {toTitleCase(product?.category?.name)}
        </p>
      </div>

      {product?.has_variation ? <div>Show Variation</div> : ""}

      {product?.is_discount === 1 ? (
        <div className="space-y-2">
          <h5 className="text-2xl lg:text-3xl text-[#202634] font-medium">
            ৳{product?.price - parseFloat(product?.discount_amount)}
          </h5>

          <div className="flex items-center gap-2">
            <p className="text-lg lg:text-xl text-[#757575]">
              <s>৳{product?.price}</s>
            </p>
            <p className="bg-gray-500 text-xs text-white px-2 py-1 rounded-lg">
              -{" "}
              {calculateDiscountPercentage(
                product?.price,
                parseFloat(product?.discount_amount)
              )}
              %
            </p>
          </div>

          {product?.discount_date && (
            <p>Discount Available Till | {product?.discount_date}</p>
          )}
        </div>
      ) : (
        <h5 className="text-2xl lg:text-3xl text-[#202634] font-medium">
          ৳{product?.price}
        </h5>
      )}

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <p className="tracking-wide">Quantity</p>
          <button
            className="btn-style-icon-only btn-style-dark"
            onClick={() => setDesiredQty(desiredQty + 1)}
          >
            <FaPlus />
          </button>

          <p className="text-xl">{desiredQty}</p>

          <button
            className="btn-style-icon-only btn-style-dark"
            onClick={() => setDesiredQty(desiredQty - 1)}
            disabled={desiredQty === 1}
          >
            <FaMinus />
          </button>
        </div>

        <div className="flex justify-between items-center gap-6">
          <button className="btn-primary-style btn-style-dark bg-[#202634] flex-1">
            <FaCartPlus className="text-xl" /> Add to Cart
          </button>
          <button className="btn-primary-style btn-style-outlined flex-1">
            <FaHeartCirclePlus className="text-xl" /> Wishlist
          </button>
        </div>
      </div>

      <div className="tracking-wide space-y-3">
        <p>SKU | {product?.code}</p>
        <p>Category | {toTitleCase(product?.category?.name)}</p>
        <div className="flex items-center gap-2">
          <p>Status|</p>
          {product?.stock <= 0 ? (
            <p className="badge-primary-style bg-red-100 text-red-600 ">
              Stock Out
            </p>
          ) : product?.stock < 10 ? (
            <p className="badge-primary-style bg-orange-100 text-orange-600">
              Low Stock
            </p>
          ) : (
            <p className="badge-primary-style bg-green-100 text-green-600">
              In Stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
