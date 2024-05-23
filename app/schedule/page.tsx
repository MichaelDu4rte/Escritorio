"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/Navbar";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Schedule = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <Navbar />
        <div
          className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Agendar Consulta
        </div>

        <InlineWidget url="https://calendly.com/birdsoftware/15min" />

        <div className="max-w-7xl w-full relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <footer className="w-full pt-20 pb-10 text-white" id="contact">
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
        </div>
      </div>
    </>
  );
};

export default Schedule;
