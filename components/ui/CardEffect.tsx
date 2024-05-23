import { FaHouseUser } from "react-icons/fa";
import { HoverEffect } from "./CardHover";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";
import { GiFamilyHouse } from "react-icons/gi";
import { RiNavigationLine } from "react-icons/ri";
import { FaPeopleCarryBox } from "react-icons/fa6";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-[#f9f4e5] p-4 rounded-full">
        <FaHouseUser className="w-8 h-8 text-black" />
      </div>
    ),
    title: "DIREITO CONDOMINIAL",
    description:
      "Somos especialistas em Direito Condominial, oferecendo assessoria completa para Síndicos Moradores e Profissionais, Conselheiros, Condôminos, Inquilinos, Zeladores, Prestadores de Serviço e Imobiliárias.",
  },
  {
    icon: (
      <div className="bg-[#f9f4e5] p-4 rounded-full">
        <GiFamilyHouse className="w-8 h-8 text-black" />
      </div>
    ),
    title: "DIREITO IMOBILIÁRIO",
    description:
      "Atuamos em diversas áreas do Direito Imobiliário, incluindo a regularização de imóveis, inventários, testamentos, compra, venda, aluguel, usucapião, indenizações, entre outras questões.",
  },
  {
    icon: (
      <div className="bg-[#f9f4e5] p-4 rounded-full">
        <RiNavigationLine className="w-8 h-8 text-black" />
      </div>
    ),
    title: "CONSULTA ONLINE",
    description:
      "Precisa de ajuda em Direito Condominial e Imobiliário? Agende sua consulta online de forma simples, rápida e segura! No dia e horário marcados, acesse pelo computador, celular ou tablet e conte com nossa expertise para resolver suas questões jurídicas.",
  },
  {
    icon: (
      <div className="bg-[#f9f4e5] p-4 rounded-full">
        <FaPeopleCarryBox className="w-8 h-8 text-black" />
      </div>
    ),
    title: "MENTORIA PARA SÍNDICOS",
    description:
      "A função de síndico está cada vez mais complexa! Nossa mentoria tem o objetivo de ajudar síndicos de todo o país, oferecendo estratégias e boas práticas de atuação em gestão condominial. Conte conosco para tornar sua administração mais eficiente e segura.",
  },
];
export default CardHoverEffectDemo;
