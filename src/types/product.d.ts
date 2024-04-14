export interface ProductItemProps {
  src: string;
  name: string;
  price: number;
  link: string;
}

interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  tags: string | null;
  color: string | null;
  description: string | null;
  deal_price: number;
  image: Image;
}

interface CatalogueData {
  data: Image[];
}

export interface ProductWithCataloguesProps extends ProductProps {
  catalogues: CatalogueData;
}
