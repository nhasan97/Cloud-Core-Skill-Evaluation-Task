/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useCartContext } from "@/src/contexts/CartContextProvider";
import { TCartContext, TCartItem } from "@/src/types";
import { useRouter } from "next/navigation";
import CartTableRow from "./CartTableRow";
import NoData from "@/src/components/shared-components/NoData";

const TabPCView = () => {
  const { itemsInCart, totalBill } = useCartContext() as TCartContext;

  const router = useRouter();

  const handleNavigateToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="hidden w-full h-[80%] lg:flex gap-6">
      <div className="bg-white hidden lg:block w-[80%] h-full overflow-y-auto rounded-lg border border-gray-300">
        {itemsInCart.length > 0 ? (
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
              {itemsInCart.map((item: TCartItem) => (
                <CartTableRow key={item.id} item={item}></CartTableRow>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData text={"No Items Found"}></NoData>
        )}
      </div>

      <div className="w-[20%] rounded-lg border border-gray-300 py-5 px-3 space-y-6">
        <h5 className="text-[#757575] font-semibold">Grand Total</h5>

        <div className="text-[#808080] space-y-3">
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">Total -</span>
            <span>৳{totalBill}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">
              Delivery Charge -
            </span>
            <span>৳80</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#757575]">Grand Total -</span>
            <span>৳{(totalBill + Number(80)).toFixed(2)}</span>
          </p>
        </div>

        <button
          className="btn-primary-style btn-style-dark w-full mt-6"
          disabled={itemsInCart.length <= 0}
          onClick={() => handleNavigateToCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default TabPCView;
