import {
  CarouselSection,
  ContactSection,
  ServiceSection,
  Wrapper,
} from "@/components";

export default function Home() {
  return (
    <Wrapper>
      {/*  carousel  */}
      <CarouselSection />

      {/* Services section */}
      <ServiceSection />

      {/*contact section*/}
      <ContactSection />
    </Wrapper>
  );
}
