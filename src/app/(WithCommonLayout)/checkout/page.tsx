"use client";

import Container from "@/src/components/layouts/Container";
import { useCartContext } from "@/src/contexts/CartContextProvider";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { placeOrderThunk } from "@/src/redux/slices/orderSlice";
import { TOrder } from "@/src/types/order";
import courierServices from "../../../../public/data/courier.json";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import BreadCrumb from "@/src/components/UI/BreadCrumb";
import MainLogo from "@/src/components/shared-components/MainLogo";
import SectionHeading from "@/src/components/UI/SectionHeading";
import "../../../styles/input.css";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector(
    (currentState) => currentState?.orderSlice
  );
  const { itemsInCart, totalBill } = useCartContext();

  const idsOfItemsInCart = itemsInCart?.map((item) => item?.id);
  const qtyOfItemsInCart = itemsInCart?.map((item) => item?.qty);

  const [customerInfo, setCustomerInfo] = useState({
    c_name: "",
    c_phone: "",
    address: "",
    courier: "",
  });

  console.log(qtyOfItemsInCart.join(","));

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();

    const orderData: TOrder = {
      product_ids: idsOfItemsInCart.join(","),
      s_product_qty: qtyOfItemsInCart.join(","),
      c_phone: customerInfo?.c_phone,
      c_name: customerInfo?.c_name,
      courier: customerInfo?.courier,
      address: customerInfo?.address,
      advance: null,
      cod_amount: totalBill.toString(),
      discount_amount: null,
      delivery_charge: "80",
    };

    dispatch(placeOrderThunk(orderData));

    if (success) toast.success("order placed successfully");
    else if (error) toast.error("Failed to place order");
  };

  return (
    <div className="w-full h-full py-20">
      <BreadCrumb />

      <Container>
        <div className="w-full h-full bg-gray-50 p-5 lg:p-10 rounded-[10px]">
          <div className="w-fit mx-auto text-center py-5 space-y-3">
            <MainLogo />

            <SectionHeading text="Checkout" />
          </div>

          <form
            action=""
            onSubmit={(e) => handlePlaceOrder(e)}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-primary-style p-5"
              onChange={(e) =>
                setCustomerInfo((prev) => ({ ...prev, c_name: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Phone"
              className="input-primary-style p-5"
              onChange={(e) =>
                setCustomerInfo((prev) => ({
                  ...prev,
                  c_phone: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Address"
              className="input-primary-style p-5"
              onChange={(e) =>
                setCustomerInfo((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
            />

            <select
              defaultValue={customerInfo?.courier}
              className="input-primary-style px-5"
              onChange={(e) =>
                setCustomerInfo((prev) => ({
                  ...prev,
                  courier: e.target.value,
                }))
              }
            >
              <option value="" disabled hidden>
                Select a courier
              </option>
              {courierServices?.map((service) => (
                <option key={service?.name} value={service?.name}>
                  {service?.name}-{service?.cost}
                </option>
              ))}
            </select>

            <div className="flex justify-between items-center gap-6">
              <button
                type="submit"
                className="btn-primary-style btn-style-dark w-full"
              >
                {loading ? <p>loading</p> : <p>Place Order</p>}
              </button>

              <button
                type="button"
                className="btn-primary-style btn-style-dark w-full"
                onClick={() =>
                  setCustomerInfo({
                    c_name: "",
                    c_phone: "",
                    address: "",
                    courier: "",
                  })
                }
              >
                Clear Fields
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
