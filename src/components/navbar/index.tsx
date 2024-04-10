import React from "react";
import Image from "next/image";
import NavItem from "@/components/navbar/NavItem";
import { Container } from "@/components";

const Navbar = () => {
  return (
    <nav className={"text-black bg-gray-50 h-24 flex justify-center font-rail"}>
      <Container className={"h-full flex items-center justify-between"}>
        {/*logo*/}
        <div className={"flex gap-3 items-center"}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="w-16 object-contain rounded-full"
            height={400}
            width={200}
          />

          <h3 className={"font-bold text-xl tracking-wider"}>Stationery</h3>
        </div>

        {/* nav options */}
        <ul className={"flex gap-8"}>
          {navList.map((item, index) => (
            <NavItem key={index} href={item.href} name={item.name} />
          ))}
        </ul>
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
];
