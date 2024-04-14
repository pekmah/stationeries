import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavItem from "@/components/navbar/NavItem";
import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import HomeServices from "@/services/HomeServices";
import { generateImageUrl } from "@/lib/utils";

const Navbar = async () => {
  const homeData = await HomeServices.getHomeData();
  const { title, logo } = homeData;

  return (
    <nav className={"text-black bg-gray-50 h-20 flex justify-center font-rail"}>
      <Container className={"h-full flex items-center justify-between"}>
        {/*logo*/}
        <Link className={"flex flex-1 gap-3 items-center"} href={"/"}>
          <Image
            src={generateImageUrl(logo.url) || "/images/logo.png"}
            alt="Logo"
            className="object-contain w-12 rounded-full md:w-14"
            height={400}
            width={200}
          />

          <h3 className={"font-bold text-xl tracking-wider hidden md:block"}>
            {title}
          </h3>
        </Link>

        {/* nav options */}
        <div className={"flex justify-between flex-1 items-center"}>
          <ul className={"flex gap-4 md:gap-8"}>
            {navList.map((item, index) => (
              <NavItem key={index} href={item.href} name={item.name} />
            ))}
          </ul>

          <Button
            className={
              "text-[15px] font-semibold text-black border border-slate-400 hover:scale-105 ease-in-out transition-all duration-200 hover:bg-c_primary hover:text-black bg-c_primary hidden md:flex rounded-full mx-auto px-8 md:mr-auto"
            }
          >
            shop with us
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

interface NavListItem {
  href: String;
  name: String;
}

const navList: NavListItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/#about",
    name: "About",
  },
  {
    href: "#contact",
    name: "Contact",
  },
  {
    href: "/products",
    name: "Products",
  },
];
