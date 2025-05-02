export type TProductImages = {
  id: number;
  name: string;
  pivot: {
    product_id: number;
    image_id: number;
  };
};
