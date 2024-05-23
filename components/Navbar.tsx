"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div className="">
      <nav className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <div>
            <Link className="cursor-pointer" href="/">
              <Image
                priority
                src="/logo/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-10 h-10 md:w-14 md:h-14"
              />
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 
          text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 
          bg-opacity-50"
        >
          <a className="hover:text-gray-50" href="/">
            Home
          </a>
          <a className="hover:text-gray-50" href="/blog">
            Blog
          </a>
          <a className="hover:text-gray-50" href="/schedule">
            Consulta Online
          </a>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-t-green-50 bg-[linear-gradient(110deg,#000103,45%,#736e62,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contato
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
