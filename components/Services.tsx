"use client";

import React from "react";
import { CardHoverEffectDemo } from "./ui/CardEffect";
import Link from "next/link";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20" id="services">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
   bg-clip-text text-transparent bg-gradient-to-b
    from-[#cd9e80] to-[#573a31] bg-opacity-50 mt-20"
      >
        Nossos serviços
      </div>
      <p
        className="mt-4 text-lg font-normal
    text-neutral-300 max-w-lg 
    text-center mx-auto"
      >
        Escritório especializado nas áreas de Direito Imobiliário e Condominial.
      </p>

      <CardHoverEffectDemo />
      <Link
        href="/schedule"
        className="flex items-center justify-center text-center cursor-pointer border rounded-full w-48 p-2 mx-auto my-2 text-white"
      >
        Agendar Consulta
      </Link>
    </div>
  );
};

export default Services;
