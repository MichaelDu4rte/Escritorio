import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/images/people3.png",
  },
];

const About = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80] bg-opacity-50">
          Sobre <br /> SIMONE GONÇALVES
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 lg:max-w-[1200px] sm:max-w-lg text-center mx-auto">
          Simone Gonçalves é formada pela Universidade da Região da Campanha
          (URCAMP), com pós-graduação pelo Instituto de Desenvolvimento Cultural
          (IDC), Universidade Estácio de Sá e MBA em Direito Imobiliário pela
          Faculdade Legale. Ela também possui formação pelo Instituto de
          Aperfeiçoamento em Gestão Legal (IAGL) e em Administração de
          Condomínios e Síndico Profissional. Localizado em Porto Alegre/RS, o
          Escritório Simone Gonçalves Advocacia adota o modelo de "boutique
          jurídica", caracterizado pela alta especialização e atendimento
          personalizado. O escritório foca na proteção jurisdicional em Direito
          Imobiliário e Condominial, oferecendo soluções para problemas
          existentes e advocacia preventiva. Utiliza tecnologia e flexibilidade
          para oferecer serviços customizados às necessidades dos clientes e
          parceiros.
        </p>

        <div className="flex items-center justify-center mx-auto cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-[400px] h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
