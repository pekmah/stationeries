import ProductServices from "@/services/ProductServices";
import Image from "next/image";
import { Container, ProductNav, Wrapper } from "@/components";
interface Params {
  id: string;
}
const product = async ({ params }: { params: Params }) => {
  const currentProduct = await ProductServices.getProductCatalogues(params.id);

  return (
    <Wrapper
      hasNav={false}
      nav={<ProductNav title={currentProduct.name + " Gallery"} />}
    >
      <Container className="min-h-[50vh] p-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-5">
        {currentProduct.catalogues.data.map((catalogue, index) => (
          <Image
            key={index}
            src={catalogue.url}
            height={1080}
            width={1920}
            className={"w-full rounded-lg"}
            alt="product"
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default product;
