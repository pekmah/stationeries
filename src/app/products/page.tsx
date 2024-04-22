import React from "react";

import { Container, ProductItem, Wrapper } from "@/components";
import ProductServices from "@/services/ProductServices";

const page = async () => {
  const data = await ProductServices.getProducts();

  return (
    <Wrapper>
      <Container
        className={
          "px-5 xl:px-0 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        }
      >
        {data?.map((product, ind) => (
          <ProductItem
            name={product.name}
            price={product.price}
            src={product.image.url}
            link={`/products/${product.id}`}
            key={ind}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default page;
