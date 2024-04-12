import {
  ContactSection,
  HeroSection,
  ServiceSection,
  Wrapper,
} from "@/components";

export default function Home() {
  return (
    <Wrapper>
      {/*  carousel  */}
      <HeroSection />

      {/* Services section */}
      <ServiceSection />

      {/*contact section*/}
      <ContactSection />
    </Wrapper>
  );
}
