"use client";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="hoobank-logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div
        className="sm:hidden flex flex-1 justify-end items-center"
        onClick={clickHandler}
      >
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
