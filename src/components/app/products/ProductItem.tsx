import { Button } from "@/components/ui/button";
import { ProductItemProps } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = (props: ProductItemProps) => {
  return (
    <div className="p-1 overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer hover:shadow-md group border-gray-50 font-rail hover:scale-105">
      {/* image */}
      <Image
        src={props.src}
        height={1080}
        width={1920}
        className={"w-full h-64 object-cover rounded-lg"}
        alt="product"
      />

      <div className="flex flex-col items-center gap-1 py-3">
        {/* name */}
        <h5 className="font-semibold">{props.name}</h5>

        {/* price */}
        <h6 className="text-base text-gray-600">{props.price} kes</h6>

        {/* button */}
        <Link href={props.link}>
          <Button
            variant={"outline"}
            className={
              "text-[13px] font-medium text-black border border-slate-400 ease-in-out transition-all duration-200 group-hover:bg-c_primary group-hover:text-white bg-c_primary bg-transparent rounded-full px-5 py-2 mr-auto h-8 mt-2"
            }
          >
            view more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
