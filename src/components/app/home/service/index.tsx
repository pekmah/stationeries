import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import HomeServices from "@/services/HomeServices";
import { isEven } from "@/lib/utils";

const ServiceSection = async () => {
  const { services } = await HomeServices.getHomeData();

  return (
    <>
      {services?.map(({ image, title, body = "", link }, index) => {
        const containerClassName = isEven(index)
          ? "md:flex-row"
          : "md:flex-row-reverse";
        return (
          <section className={"flex p-5 md:p-20"} key={index}>
            <Container
              className={`flex flex-col space-y-5 md:space-y-0 ${containerClassName}`}
            >
              {/*image*/}
              <div className={"flex-1 flex"}>
                <Image
                  src={image.url}
                  alt={"service"}
                  className={
                    "w-full md:w-5/6 md:max-w-[35vw] object-cover rounded-xl max-h-[400px]"
                  }
                  height={500}
                  width={600}
                />
              </div>

              {/*text */}
              <div className={"flex-1"}>
                <h3 className={"font-semibold text-3xl "}>{title}</h3>

                <p
                  className={
                    "text-sm md:text-[15px] text-gray-600 leading-7 my-4 md:w-3/4"
                  }
                >
                  {body}
                </p>

                <Link href={link.url}>
                  <Button
                    variant={"outline"}
                    className={
                      "text-[15px] font-semibold text-black border border-slate-400 hover:scale-105 ease-in-out transition-all duration-200 hover:bg-c_primary hover:text-black bg-c_primary bg-transparent text-sm rounded-full px-8 py-3 mr-auto"
                    }
                  >
                    {link.text}
                  </Button>
                </Link>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
};

export default ServiceSection;
