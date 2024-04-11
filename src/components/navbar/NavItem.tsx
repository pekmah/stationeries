import React from "react";
import Link from "next/link";

const NavItem = ({ href, name }: { href: String; name: String }) => {
  return (
    <li
      className={
        "font-rail text-[15px] text-black font-medium hover:text-c_primary hover:font-semibold transition-all ease-in duration-100 hover:border-b-2 border-c_primary hover:cursor-pointer "
      }
    >
      {/*// @ts-ignore*/}
      <Link href={href}>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
