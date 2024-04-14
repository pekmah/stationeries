import qs from "qs";

import { flattenAttributes } from "@/lib/utils";
import { GlobalsProps } from "@/types/globals";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API;

const metaDataQuery = qs.stringify({
  fields: ["title", "description"],
});

export const getMetaData = async (): Promise<GlobalsProps> => {
  const url = new URL(`api/global`, BASE_URL);
  url.search = metaDataQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res;
};

const GlobalServices = {
  getMetaData,
};

export default GlobalServices;
