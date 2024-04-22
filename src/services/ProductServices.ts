import { flattenAttributes } from "@/lib/utils";
import { HomeProps } from "@/types/home";
import { ProductProps, ProductWithCataloguesProps } from "@/types/product";
import { link } from "fs";
import qs from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API;

const productsQuery = qs.stringify({
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
});
const productCatologuesQuery = qs.stringify({
  fields: ["name"],
  populate: {
    catalogues: {
      fields: ["url", "alternativeText"],
    },
  },
});

export const getProducts = async (): Promise<ProductProps[]> => {
  const url = new URL(`api/products`, BASE_URL);
  url.search = productsQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res.data;
};

export const getProductCatalogues = async (
  id: string
): Promise<ProductWithCataloguesProps> => {
  const url = new URL(`api/products/${id}`, BASE_URL);
  url.search = productCatologuesQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res;
};

const ProductServices = {
  getProducts,
  getProductCatalogues,
};

export default ProductServices;
