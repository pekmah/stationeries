import React from "react";
import { Container, InputWithLabel, TextareaWithLabel } from "@/components";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className={"flex bg-c_secondary font-rail p-5 md:p-12"}
    >
      <Container>
        <h2 className={"text-3xl text-white font-bold text-center mb-10"}>
          Contact us
        </h2>

        <div className={"flex flex-col"}>
          <form className={"flex flex-col md:flex-row gap-5 text-white"}>
            <div className={"flex-1 flex flex-col items-end gap-5 "}>
              {/*// @ts-ignore*/}
              <InputWithLabel
                label={"Full Name"}
                placeholder="enter your name"
              />
              {/*// @ts-ignore*/}
              <InputWithLabel
                label={"Email"}
                type={"email"}
                placeholder="email@mail.com"
              />

              {/*// @ts-ignore*/}
              <InputWithLabel label={"Subject"} placeholder="subject" />
            </div>
            <div className={"flex-1"}>
              <TextareaWithLabel label={"Message"} placeholder="Message" />
            </div>
          </form>

          <Button
            variant={"outline"}
            className={
              "border-white text-[15px] font-semibold hover:text-black border hover:scale-105 ease-in-out transition-all duration-200 hover:bg-c_primary  bg-c_primary uppercase  text-white my-8 bg-transparent text-base rounded-full mx-auto px-8 py-5 md:mr-auto w-full md:w-56 h-12"
            }
          >
            Send
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
