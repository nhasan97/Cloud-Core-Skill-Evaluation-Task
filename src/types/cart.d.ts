export type TCartItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  qty: number;
  image: string;
};

export type TCartItemProp = { item: TCartItem };

export type TCartState = {
  cartItems: TCartItem[];
};

export type TCartContext = {
  itemsInCart: TCartItem[];
  itemsInCartCount: number;
  totalBill: number;
  // desiredQty: number;
  // handleEditQtyInProductDetails: (passedQty: number, product: TProduct) => void;
  handleAddToCart: (product: TProduct, desiredQty?: number) => void;
  handleEditQty: (editedQty: number, item: TCartItem) => void;
  handleDeleteCartItem: (id: number) => void;
};
