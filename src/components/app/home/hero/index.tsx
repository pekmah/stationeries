import React from "react";

import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import HomeServices from "@/services/HomeServices";
import Link from "next/link";
import Image from "next/image";
import { generateImageUrl } from "@/lib/utils";

const Hero = async () => {
  const data = await HomeServices.getHomeData();
  const { blocks } = data;
  const { Heading, Image: img, link } = blocks[0];

  // const imageURl = process.env. Image.url;

  return (
    <section className={` h-[60vh] relative`}>
      <Image
        src={generateImageUrl(img.url)}
        alt="hero"
        className="object-cover w-full h-full"
        width={1920}
        height={1080}
      />

      <div className={"absolute inset-0 bg-[#00000080] flex font-rail"}>
        <Container
          className={
            "flex flex-col items-center md:items-start justify-center space-y-8 transition-all ease-out duration-1000"
          }
        >
          <div className={"w-full md:w-1/2 lg:w-1/3 "}>
            <h2
              style={{ lineHeight: "60px" }}
              className={
                "text-center md:text-left text-4xl md:text-5xl capitalize font-bold text-white tracking-wide"
              }
            >
              {Heading}
            </h2>
          </div>

          <Link href={link.url} target="_blank" rel="noreferrer">
            <Button
              variant={"outline"}
              className={
                "border-white text-white bg-transparent text-base rounded-full px-8 py-4 md:mr-auto"
              }
            >
              {link.text}
            </Button>
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
