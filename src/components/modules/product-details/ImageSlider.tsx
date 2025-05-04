"use client";

import envConfig from "@/src/config/envConfig";
import { TProductImages } from "@/src/types";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";

const ImageSlider = ({
  productImages,
}: {
  productImages: TProductImages[];
}) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
      <div className="w-full lg:flex-1 flex justify-between items-center gap-3 relative">
        {productImages?.length > 1 && (
          <button
            className="btn-style-icon-only btn-style-light absolute left-2"
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
          className="w-full h-full bg-gray-100 object-fill object-center rounded-[10px]"
        />

        {productImages?.length > 1 && (
          <button
            className="btn-style-icon-only btn-style-light absolute right-2"
            onClick={() => setActiveImage(activeImage + 1)}
            disabled={activeImage >= productImages?.length - 1}
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {productImages?.length > 1 && (
        <div className="w-full lg:w-fit flex flex-row lg:flex-col justify-between items-center gap-6">
          {productImages?.length > 4 && (
            <>
              <button className="flex lg:hidden text-xl cursor-pointer">
                <FaChevronLeft />
              </button>
              <button className="hidden lg:flex text-xl cursor-pointer">
                <FaChevronUp />
              </button>
            </>
          )}

          <div className="w-full mx-auto flex flex-row lg:flex-col items-center gap-6 overflow-x-auto">
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
            <>
              <button className="flex lg:hidden text-xl cursor-pointer">
                <FaChevronRight />
              </button>
              <button className="hidden lg:flex text-xl cursor-pointer">
                <FaChevronDown />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
