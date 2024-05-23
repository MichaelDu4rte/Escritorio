"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RecentBlog = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl  md:text-7xl  text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80] bg-opacity-50 p-2"
        >
          Blog
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Recentes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        <div className="grid gap-4">
          <div className=" uppercase  sm:text-[10px] lg:text-2xl text-center bg-clip-text text-white">
            <span>Quem paga por infiltração?</span>
          </div>
          <a
            className="cursor-pointer text-cente "
            href="/blog/quem-paga-por-infiltracao"
          >
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg  z-5 hover:opacity-[0.5] transition-opacity"
              src="https://images.pexels.com/photos/3867623/pexels-photo-3867623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
        </div>
        <div className="grid gap-4">
          <div className=" uppercase  sm:text-[10px] lg:text-2xl text-center bg-clip-text text-white">
            <span>Como funciona a Vistoria?</span>
          </div>
          <a className="cursor-pointer" href="/blog/como-funciona-vestoria">
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg  z-5 hover:opacity-[0.5] transition-opacity"
              src="https://images.pexels.com/photos/7937366/pexels-photo-7937366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
        </div>
        <div className="grid gap-4">
          <div className=" uppercase  sm:text-[10px] lg:text-2xl text-center bg-clip-text text-white">
            <span>Contrato de Aluguel</span>
          </div>
          <a className="cursor-pointer" href="/blog/contrato-de-aluguel">
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg  z-5 hover:opacity-[0.5] transition-opacity"
              src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
