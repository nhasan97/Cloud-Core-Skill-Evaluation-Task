"use client";

import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext, TCartItem } from "@/src/types";
import CartMobileCard from "./CartMobileCard";
import NoData from "@/src/components/shared-components/NoData";
import Link from "next/link";

const MobileView = () => {
  const { itemsInCart, totalBill } = useCartContext() as TCartContext;
  // , total
  return (
    <div className="lg:hidden w-full h-screen flex flex-col gap-6">
      <div className="bg-white block lg:hidden w-full h-[90%] overflow-y-auto rounded-lg border border-gray-300">
        {itemsInCart.length > 0 ? (
          <div>
            {itemsInCart.map((item: TCartItem) => (
              <CartMobileCard key={item.id} item={item}></CartMobileCard>
            ))}
          </div>
        ) : (
          <NoData text={"No Items Found"}></NoData>
        )}
      </div>

      <div className="w-full rounded-lg p-3 space-y-6 border border-gray-300">
        <h5 className="text-[#757575] font-semibold">Grand Total</h5>

        <div className="text-[#808080] text-base space-y-3">
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">Total -</span>
            <span>${totalBill}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">
              Delivery Charge -
            </span>
            <span>$80</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">Grand Total -</span>
            <span>${(totalBill + Number(80)).toFixed(2)}</span>
          </p>
        </div>

        <Link href="/checkout-page">
          <button
            className="btn-primary-style btn-style-dark w-full mt-6"
            disabled={itemsInCart.length <= 0}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileView;
