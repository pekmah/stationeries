"use client";

import { Container, InputWithLabel, TextareaWithLabel } from "@/components";
import { Button } from "@/components/ui/button";
import { SendEmailAction } from "@/actions/SendEmailAction";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import ContactsCard from "./ContactsCard";
import GlobalServices from "@/services/GlobalServices";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function formAction(formData: FormData) {
    const result = await SendEmailAction(formData);

    if (result) {
      toast({
        title: "Email sent!",
        description: "Email sent successfully.",
      });
      formRef.current?.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Email not sent!",
        description: "There was a problem sending email.",
      });
    }
  }
  return (
    <section
      id="contact"
      className={"flex bg-c_secondary font-rail p-5 md:p-12"}
    >
      <Container>
        <h2 className={"text-3xl text-black font-bold text-center mb-10"}>
          Contact us
        </h2>

        <form ref={formRef} className={"flex flex-col"} action={formAction}>
          <div className={"flex flex-col md:flex-row gap-5 text-black"}>
            <div className={"flex-1 flex flex-col items-end gap-5 "}>
              <InputWithLabel
                label={"Full Name"}
                placeholder="enter your name"
                required={true}
                name="name"
              />

              <InputWithLabel
                label={"Email"}
                type={"email"}
                required
                placeholder="email@mail.com"
                name="email"
              />

              <InputWithLabel
                label={"Subject"}
                placeholder="subject"
                name="subject"
                required
              />
            </div>
            <div className={"flex-1"}>
              <TextareaWithLabel
                required
                label={"Message"}
                placeholder="Message"
                name="message"
              />
            </div>
          </div>
          <Button
            variant={"outline"}
            className={
              "border-black text-[15px] font-semibold hover:text-white border hover:scale-105 ease-in-out transition-all duration-200 hover:bg-c_primary  bg-c_primary uppercase  text-black my-8 bg-transparent text-base rounded-full mx-auto px-8 py-5 md:mr-auto w-full md:w-56 h-12"
            }
            type="submit"
          >
            Send
          </Button>
        </form>

        <ContactDetails />
      </Container>
    </section>
  );
};

export default Contact;
