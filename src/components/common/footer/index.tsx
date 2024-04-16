import React from "react";
import { Container } from "@/components";

const Footer = () => {
  return (
    <footer
      className={
        "p-3 border-t border-slate-500 bg-c_secondary text-black text-xs md:text-sm text-center lowercase"
      }
    >
      <Container>
        Copyright © {new Date().getFullYear()} Stationeries. All rights
        reserved.
      </Container>
    </footer>
  );
};

export default Footer;
