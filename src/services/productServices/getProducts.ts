import envConfig from "@/src/config/envConfig";

export const getProducts = async () => {
  const response = await fetch(`${envConfig.baseApi}/all/product/get`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
