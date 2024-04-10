import React from "react";
import Link from "next/link";

const NavItem = ({ href, name }: { href: String; name: String }) => {
  return (
    <li
      className={
        "font-rail text-base text-black font-medium hover:text-yellow-600 hover:font-semibold transition-all ease-in duration-300 hover:border-b-2 border-yellow-600 hover:cursor-pointer "
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
