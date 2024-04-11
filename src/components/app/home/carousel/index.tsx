import React from "react";
import { Container } from "@/components";
import { Button } from "@/components/ui/button";

const Carousel = () => {
  return (
    <section
      className={
        "bg-[url(/images/home/carousel-bg.jpg)] bg-no-repeat bg-cover object-cover h-[60vh] relative"
      }
    >
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
              Make your learning colourful
            </h2>
          </div>

          <Button
            variant={"outline"}
            className={
              "border-white text-white bg-transparent text-base rounded-full px-8 py-4 md:mr-auto"
            }
          >
            Shop with us
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Carousel;
