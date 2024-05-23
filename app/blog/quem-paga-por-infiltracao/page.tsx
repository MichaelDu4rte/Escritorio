import Navbar from "@/components/Navbar";

import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar></Navbar>

      <div className="text-white flex flex-col justify-center items-center">
        <div className="p-4 mx-auto relative z-10 sm:w-full lg:w-[1200px] pt-10 md:pt-20 px-2">
          <div className="text-4xl mb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            QUEM PAGA POR INFILTRAÇÃO NO APARTAMENTO?<br></br>
          </div>

          <p className="text-start">
            Quando se trata de infiltração no apartamento, é muito comum que a
            origem dessa infiltração seja proveniente do imóvel vizinho. Esse
            tipo de vazamentos pode causar diversos danos ao imóvel, como por
            exemplo, destruição de forro, pintura, revestimentos, rodapé, móveis
            e luminárias. O Código Civil – artigo 1.277, dispõe expressamente
            sobre o uso anormal da propriedade referente aos direitos de
            vizinhança:
          </p>

          <p className="text-start">
            A Lei do Inquilinato dispõe que: <br></br> <br></br>“O proprietário
            ou o possuidor de um prédio tem o direito de fazer cessar as
            interferências prejudiciais à segurança, ao sossego e à saúde dos
            que o habitam, provocadas pela utilização de propriedade vizinha”.
            <br></br>
            <br></br> Analisando a legislação, é possível extrair que o direito
            de propriedade não é absoluto, pois encontra limites no direito de
            vizinhança. Esses direitos tem por objetivo conciliar os interesses
            dos vizinhos, ou seja, visa a paz social. Na prática, o direito de
            propriedade dos vizinhos, às vezes, se traduz em interesses
            conflitantes. É o caso, por exemplo, de situações em que ao direito
            de construir de um vizinho, contrapõe-se o direito do outro vizinho.
          </p>

          <div className="text-3xl  capitalize mt-5 md:text-5xl mb-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            Danos Materiais
            <br></br>
          </div>
          <p className="text-start">
            É preciso averiguar se, realmente, o vizinho deve ser
            responsabilizado, seja por danos materiais decorrentes de
            infiltração no apartamento inferior e/ou por danos morais.<br></br>{" "}
            <br></br>À luz do direito de vizinhança e das regras de convivência
            social, cumpre ao proprietário de apartamento a obrigação de velar
            para que defeitos apresentados no imóvel da sua titularidade não
            afetem o imóvel vizinho.
            <br></br> <br></br>Logo, uma vez demostrado os danos, e devidamente
            provada a negligência do proprietário do apartamento superior à
            solução do problema, aliado ao nexo de causalidade entre sua conduta
            e os danos, haverá dever de reparar os danos patrimoniais – artigos
            186 e 403 do Código Civil. Assim, em sede de responsabilidade civil
            pela falta de conservação e cuidados do imóvel vizinho que prejudica
            outro, a comprovação vital será, principalmente, a perícia técnica
            de engenharia.
            <br></br> <br></br> Isso ocorre porque uma perícia técnica pode
            comprovar se os danos foram de fato causados pelo imóvel vizinho. A
            “culpa” do vizinho pela infiltração, na modalidade de negligência,
            se perfeitamente evidenciada, gera o dever de indenizar os prejuízos
            causados no imóvel limítrofe. Inclusive, tratando-se de danos
            materiais, caso haja impossibilidade de uso do imóvel, poderá também
            ser incluído valores pagos a título de aluguel de outro imóvel, o
            qual serviu de residência enquanto os problemas de infiltração não
            foram sanados.
          </p>

          <div className="text-3xl capitalize mt-5 mb-5 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            Danos Morais
            <br></br>
          </div>

          <p className="text-start">
            Quanto a danos morais, são os detalhes de cada situação que
            determinam se há ou não a configuração de dano moral. Isso visto
            que, a conceituação de dano moral é extensa e abrangente,
            notadamente à luz da Constituição Federal – artigo 5º, inciso V, o
            qual assegura o direito de indenização por dano material e moral,
            protegendo com amplitude o patrimônio material e imaterial das
            pessoas. Em caso de dúvidas, procure um advogado especialista em
            direito imobiliário de sua confiança para entender seus direitos. O
            advogado especialista conhece os detalhes técnicos da área
            imobiliária e tem a prática necessária para uma atuação segura do
            que pode e não pode ser feito em cada caso. Portanto, ele vai direto
            ao ponto e agiliza os procedimentos necessários.
          </p>
        </div>
      </div>

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
  );
}
