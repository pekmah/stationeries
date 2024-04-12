interface ImageProps {
  url: string;
  alternativeText: string;
}

interface LogoProps {
  url: string;
  alternativeText: string;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

interface BlockProps {
  id: number;
  __component: string;
  Heading: string;
  Image: ImageProps;
  link: LinkProps;
}

interface ServiceProps {
  id: number;
  __component: string;
  title: string;
  body: string;
  image: ImageProps;
  link: LinkProps;
}

export interface HomeProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: BlockProps[];
  logo: LogoProps;
  services: ServiceProps[];
}
