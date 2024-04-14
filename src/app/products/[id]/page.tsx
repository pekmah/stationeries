import ProductServices from "@/services/ProductServices";
import Image from "next/image";
interface Params {
  id: string;
}
import { Footer, ProductNav, Wrapper } from "@/components";
export const Page = async ({ params }: { params: Params }) => {
  const currentProduct = await ProductServices.getProductCatalogues(params.id);

  return (
    <Wrapper
      hasNav={false}
      nav={<ProductNav title={currentProduct.name + " Gallery"} />}
    >
      <main className="min-h-[50vh] p-5 columns-1 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-5 [&>img:not(:first-child)]:mt-5">
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
      </main>
    </Wrapper>
  );
};

Page.getLayout = function getLayout() {
  return <div>hello</div>;
};

export default Page;
