"use client";

import envConfig from "@/src/config/envConfig";
import { TProductImages } from "@/src/types";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const ImageSlider = ({
  productImages,
}: {
  productImages: TProductImages[];
}) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <div className="w-full h-full space-y-6">
      <div className="w-full flex justify-between items-center gap-3">
        {productImages?.length > 1 && (
          <button
            className="btn-icon-only-style"
            onClick={() => setActiveImage(activeImage - 1)}
            disabled={activeImage <= 0}
          >
            <FaChevronLeft />
          </button>
        )}

        <Image
          width={600}
          height={600}
          src={`${envConfig.imageUrl}/${productImages[activeImage]?.name}`}
          alt="Product Image"
          className={`${
            productImages?.length > 1 ? "w-[70%]" : "w-full"
          }  h-full bg-gray-100 object-fill object-center rounded-[10px]`}
        />

        {productImages?.length > 1 && (
          <button
            className="btn-icon-only-style"
            onClick={() => setActiveImage(activeImage + 1)}
            disabled={activeImage >= productImages?.length - 1}
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {productImages?.length > 1 && (
        <div className="w-full flex justify-between items-center">
          {productImages?.length > 4 && (
            <button className="text-xl cursor-pointer">
              <FaChevronLeft />
            </button>
          )}

          <div className="w-[70%] mx-auto flex items-center gap-6 overflow-x-auto">
            {productImages?.map((img, index) => (
              <Image
                key={img?.id}
                width={60}
                height={60}
                src={`${envConfig.imageUrl}/${img?.name}`}
                alt="Product Image"
                className={`size-20 object-fill object-center rounded-[10px] ${
                  index === activeImage ? "" : "opacity-50"
                }`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>

          {productImages?.length > 4 && (
            <button className="text-xl cursor-pointer">
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
