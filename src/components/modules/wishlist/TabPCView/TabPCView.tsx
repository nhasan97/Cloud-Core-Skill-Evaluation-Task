/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { TWishlistContext, TWishlistItem } from "@/src/types";
import NoData from "@/src/components/shared-components/NoData";
import { useWishlistContext } from "@/src/contexts/WishlistProvider";
import WishlistTableRow from "./WishlistTableRow";

const TabPCView = () => {
  const { itemsInWishlist } = useWishlistContext() as TWishlistContext;

  return (
    <div className="hidden w-full h-[80%] lg:flex gap-6">
      <div className="bg-white hidden lg:block w-[80%] h-full overflow-y-auto rounded-lg border border-gray-300">
        {itemsInWishlist.length > 0 ? (
          <table className="w-full">
            {/* head */}
            <thead>
              <tr className="flex justify-between items-center text-[#757575] p-5 border-b border-gray-300">
                <th className="flex-2 text-left">Product</th>
                <th className="flex-1">Category</th>
                <th className="flex-1">Price</th>
                <th className="flex-1">Qty</th>
                <th className="flex-1">SubTotal</th>
                <th className="flex-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {itemsInWishlist.map((item: TWishlistItem) => (
                <WishlistTableRow key={item.id} item={item}></WishlistTableRow>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData text={"No Items Found"}></NoData>
        )}
      </div>
    </div>
  );
};

export default TabPCView;
