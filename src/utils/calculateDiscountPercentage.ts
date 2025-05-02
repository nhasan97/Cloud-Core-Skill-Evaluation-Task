export const calculateDiscountPercentage = (
  price: number,
  discount_amount: number
) => {
  const discount_percentage = Math.round((discount_amount / price) * 100);
  return discount_percentage;
};
