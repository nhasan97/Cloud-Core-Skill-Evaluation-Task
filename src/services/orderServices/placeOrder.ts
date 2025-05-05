/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from "@/src/config/envConfig";
import { TOrder } from "@/src/types/order";

export const placeOrder = async (
  orderData: TOrder,
  { rejectWithValue }: { rejectWithValue: any }
) => {
  try {
    const response = await fetch(`${envConfig.baseApi}/public/order/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message || "Order failed");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message || "Something went wrong");
  }
};
