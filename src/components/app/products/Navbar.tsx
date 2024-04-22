"use client";

import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductNav = ({ title }: { title: string }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <nav className={"text-black bg-gray-50 h-20 flex justify-center font-rail"}>
      <Container className={"h-full flex items-center justify-between gap-3"}>
        <Button onClick={handleGoBack} variant={"ghost"}>
          <ArrowLeft size={24} />
        </Button>

        {/*logo*/}
        <Link className={"flex flex-1 gap-3 items-center"} href={"/"}>
          <h3 className={"font-bold text-xl tracking-wider"}>{title}</h3>
        </Link>
      </Container>
    </nav>
  );
};

export default ProductNav;
