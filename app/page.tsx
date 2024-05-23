import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/Slider";
import About from "@/components/About";
import Services from "@/components/Services";
import RecentBlog from "@/components/RecentBlog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar></Navbar>
      <Spotlight className="hidden md:flex left-96 " fill="#f9f4e5"></Spotlight>
      <div
        id="home"
        className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-30 px-2"
      >
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 
          bg-opacity-50"
        >
          Você precisa de um <br />
          Advogado Imobiliário.
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Evite problemas e contratos mal elaborados. Tenha um advogado ao seu
          lado!
        </p>

        <Link
          href="/schedule"
          className="flex items-center justify-center text-center cursor-pointer border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Agendar Consulta
        </Link>

        <div className="w-full pt-20">
          <SliderOne></SliderOne>
          <About></About>
          <Services></Services>
          <RecentBlog></RecentBlog>
          <div className="max-w-7xl w-full relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
