import React from "react";
import Image from "next/image";
import NavItem from "@/components/navbar/NavItem";
import { Container } from "@/components";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className={"text-black bg-gray-50 h-20 flex justify-center font-rail"}>
      <Container className={"h-full flex items-center justify-between"}>
        {/*logo*/}
        <div className={"flex flex-1 gap-3 items-center"}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="w-12 md:w-14 object-contain rounded-full"
            height={400}
            width={200}
          />

          <h3 className={"font-bold text-xl tracking-wider hidden md:block"}>
            Stationery
          </h3>
        </div>

        {/* nav options */}
        <div className={"flex justify-between flex-1 items-center"}>
          <ul className={"flex gap-8"}>
            {navList.map((item, index) => (
              <NavItem key={index} href={item.href} name={item.name} />
            ))}
          </ul>

          <Button
            variant={"outline"}
            className={
              "hidden md:flex border-white hover:border-c_primary hover:bg-c_primary text-white hover:text-white bg-c_primary text-sm rounded-full mx-auto px-8 md:mr-auto"
            }
          >
            shop
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
    href: "",
    name: "Home",
  },
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#contact",
    name: "Contact",
  },
  {
    href: "/",
    name: "Products",
  },
];
