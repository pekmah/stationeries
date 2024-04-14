export type MetaProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface GlobalsProps {
  title: string;
  description: string;
}
