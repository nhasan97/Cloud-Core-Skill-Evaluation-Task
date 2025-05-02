import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-[275px] h-fit bg-white p-1 space-y-3 rounded-xl border border-[#75757538]">
      <div className="h-[400px] md:h-[300px] bg-[#696b692f] rounded-[10px]">
        <div className="w-full h-full rounded-[10px]  animate-pulse" />
      </div>

      <div className="w-full flex flex-col gap-4 px-2 py-3">
        <div className="w-2/3 h-6 bg-[#a5a5a5] animate-pulse rounded-lg"></div>

        <div className="w-full flex justify-between items-center gap-6">
          <div className="w-2/3 h-5 bg-[#a5a5a5] animate-pulse rounded-lg"></div>

          <div className="w-2/3 h-5 bg-[#a5a5a5] animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
