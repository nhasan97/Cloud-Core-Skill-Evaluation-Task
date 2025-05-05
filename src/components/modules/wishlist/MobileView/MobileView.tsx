"use client";

import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext, TCartItem } from "@/src/types";
import NoData from "@/src/components/shared-components/NoData";
import WishlistMobileCard from "./WishlistMobileCard";

const MobileView = () => {
  const { itemsInCart } = useCartContext() as TCartContext;

  return (
    <div className="lg:hidden w-full h-screen flex flex-col gap-6">
      <div className="bg-white block lg:hidden w-full h-[90%] overflow-y-auto rounded-lg border border-gray-300">
        {itemsInCart.length > 0 ? (
          <div>
            {itemsInCart.map((item: TCartItem) => (
              <WishlistMobileCard
                key={item.id}
                item={item}
              ></WishlistMobileCard>
            ))}
          </div>
        ) : (
          <NoData text={"No Items Found"}></NoData>
        )}
      </div>
    </div>
  );
};

export default MobileView;
