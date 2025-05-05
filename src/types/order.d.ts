/* eslint-disable @typescript-eslint/no-explicit-any */
export type TOrder = {
  product_ids: string;
  s_product_qty: string;
  c_phone: string;
  c_name: string;
  courier: string;
  address: string;
  advance: string | null;
  cod_amount: string;
  discount_amount: string | null;
  delivery_charge: string;
};

export type TOrderState = {
  loading: boolean;
  success: boolean;
  error: string | null;
  orderData: any;
};
