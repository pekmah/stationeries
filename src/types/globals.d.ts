export type MetaProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface GlobalsProps {
  title: string;
  description: string;
}

export type ContactProps = {
  email: string;
  whatsapp_number: string;
};

export type PhoneNumberProps = {
  id: number;
  __component: string;
  phone_number: string;
};
