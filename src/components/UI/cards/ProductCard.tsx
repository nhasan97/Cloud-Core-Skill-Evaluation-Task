import envConfig from "@/src/config/envConfig";
import { TProduct } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartShopping, FaEye, FaHeart } from "react-icons/fa6";
import "../../../styles/product.css";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { id, name, image, price, stock, is_discount, discount_amount } =
    product;

  const calculateDiscountPercentage = (
    price: number,
    discount_amount: number
  ) => {
    const discount_percentage = Math.round((discount_amount / price) * 100);
    return discount_percentage;
  };

  return (
    <div className="w-full h-fit bg-white p-1 space-y-3 rounded-xl border border-[#75757538] group">
      <div className="h-[400px] md:h-[300px] bg-[#696b692f] rounded-[10px] overflow-hidden relative">
        <div className="w-full flex justify-between items-center px-1 absolute top-1 z-10">
          {is_discount === 1 && (
            <p className="bg-gray-500 text-xs text-white px-2 py-1 rounded-lg">
              -{" "}
              {calculateDiscountPercentage(price, parseFloat(discount_amount))}%
            </p>
          )}
        </div>

        <Image
          width={400}
          height={400}
          src={envConfig.imageUrl + "/" + image}
          loading="lazy"
          alt={`Image of ${name}`}
          className="w-full h-full object-fill object-center rounded-[10px] transition-all ease-in-out duration-300 group-hover:scale-110"
        />

        <div className="flex justify-evenly items-center gap-1 px-2 translate-y-full transition-all ease-in-out duration-300 group-hover:-translate-y-12">
          <Link href={`/product-details/${id}`}>
            <button className="product-card-btn">
              <FaEye />
            </button>
          </Link>

          <button
            className="product-card-btn"
            // onClick={() => handleAddItemToWishlist(product?._id as string)}
          >
            <FaHeart />
          </button>

          <button
            className="product-card-btn"
            disabled={product?.stock <= 0}
            // onClick={() => handleAddToCart(1, product)}
          >
            <FaCartShopping />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-2 py-3">
        <h6 className="text-lg text-[#757575] font-medium">{name}</h6>

        <div className="w-full flex justify-between items-center">
          {is_discount === 1 ? (
            <div className="flex items-center gap-2">
              <h5 className="text-lg text-[#202634] font-bold">
                ৳{price - parseFloat(discount_amount)}
              </h5>
              <p className="text-sm text-[#757575]">
                <s>৳{price}</s>
              </p>
            </div>
          ) : (
            <h5 className="text-lg text-[#202634] font-bold">৳{price}</h5>
          )}

          {stock <= 0 ? (
            <p className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
              Stock Out
            </p>
          ) : stock < 10 ? (
            <p className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
              Low Stock
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
