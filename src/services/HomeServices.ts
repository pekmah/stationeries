import { flattenAttributes } from "@/lib/utils";
import { HomeProps } from "@/types/home";
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
  },
});

export const getHomeData = async (): Promise<HomeProps> => {
  const url = new URL(`api/home-page`, BASE_URL);
  url.search = homePageQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  //   flatten data
  return await flattenAttributes(await response.json());
};

const HomeServices = {
  getHomeData,
};

export default HomeServices;
