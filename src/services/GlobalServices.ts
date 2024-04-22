import qs from "qs";

import { flattenAttributes } from "@/lib/utils";
import { ContactProps, GlobalsProps, PhoneNumberProps } from "@/types/globals";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API;

const metaDataQuery = qs.stringify({
  fields: ["title", "description"],
});
const phoneDataQuery = qs.stringify({
  populate: {
    phone_numbers: true,
  },
});
const contactsDataQuery = qs.stringify({
  populate: {
    contacts: true,
  },
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

export const getContacts = async (): Promise<ContactProps> => {
  const url = new URL(`api/global`, BASE_URL);
  url.search = contactsDataQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res?.contacts;
};
export const getPhoneNumbers = async (): Promise<PhoneNumberProps[]> => {
  const url = new URL(`api/global`, BASE_URL);
  url.search = phoneDataQuery;

  const response = await fetch(url.href, { cache: "no-store" });

  if (!response.ok) throw new Error("Failed to fetch home data");

  //   flatten data
  // removes unnecessary nesting(.attributes, .data, .relationships) from the response
  const res = await flattenAttributes(await response.json());

  return res.phone_numbers;
};

const GlobalServices = {
  getMetaData,
  getContacts,
  getPhoneNumbers,
};

export default GlobalServices;
