import { flattenAttributes } from "@/lib/utils";
import { HomeProps } from "@/types/home";
import { link } from "fs";
import qs from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API;

const homePageQuery = qs.stringify({
  populate: {
    logo: { fields: ["url", "alternativeText"] },
    blocks: {
      populate: {
        Image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    },
    services: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    },
  },
});

export const getHomeData = async (): Promise<HomeProps> => {
  const url = new URL(`api/home-page`, BASE_URL);
  url.search = homePageQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res;
};

const HomeServices = {
  getHomeData,
};

export default HomeServices;
