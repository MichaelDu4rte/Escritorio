import { FaLocationArrow } from "react-icons/fa6";

import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 text-white" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center ">
        <h1
          className="heading lg:max-w-[45vw] text-2xl pb-5 md:text-3xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 
          bg-opacity-50"
        >
          Sua casa, seu futuro, sua segurança jurídica!
        </h1>
        <p className="text-white-200  my-5 text-center">
          Tenha um advogado imobiliário ao seu lado!
        </p>
        <Link
          href="/schedule"
          className="flex items-center justify-center text-center cursor-pointer border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Agendar Consulta
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 SIMONE GONÇALVES
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border border-black-300">
            <a
              href="https://www.instagram.com/simonegoncalves.com.br"
              target="_blank"
            >
              <LuInstagram />
            </a>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border border-black-300">
            <a
              href="https://api.whatsapp.com/send/?phone=5551996874189&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border border-black-300">
            <a href="mailto:contato@simonegoncalves.com.br">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
