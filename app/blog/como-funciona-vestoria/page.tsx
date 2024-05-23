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
            COMO FUNCIONA A VISTORIA DE IMÓVEL ALUGADO?<br></br>
          </div>

          <p className="text-start">
            Vai alugar ou entregar imóvel e tem dúvidas sobre como funciona a
            vistoria de imóvel alugado? Adquirir um imóvel é sempre uma boa
            conquista, seja para morar ou para investir. No entanto, antes de
            fazer as malas ou de colocar o imóvel à disposição do mercado, é
            preciso entender um processo fundamental: a vistoria. Este passo,
            muitas vezes subestimado, é a garantia de que tanto inquilinos
            quanto proprietários estão protegidos durante a duração do contrato
            de aluguel. Mas o que exatamente acontece durante uma vistoria de
            imóvel alugado?
          </p>

          <div className="text-3xl capitalize mt-5 md:text-5xl mb-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            COMO FUNCIONA A VISTORIA DO IMÓVEL ALUGADO E POR QUE É IMPORTANTE?
            <br></br>
          </div>
          <p className="text-start">
            O processo de vistoria é super importante por várias razões. Para o
            inquilino, é a garantia de que, ao entrar no imóvel, ele está
            recebendo exatamente o que foi combinado, sem surpresas
            desagradáveis como uma torneira que não funciona ou uma parede com
            umidade. <br></br> <br></br>Para o proprietário é uma forma de
            assegurar que o imóvel será devolvido nas mesmas condições em que
            foi alugado, todavia, considerando o uso normal do dia a dia.
            Durante a vistoria, o vistoriador verifica itens como a pintura das
            paredes, o funcionamento das torneiras e chuveiros, o estado do
            piso, das portas, das janelas, e assim por diante.
            <br></br> <br></br>Tudo isso é documentado em um relatório que
            inclui descrições detalhadas, bem como fotos e vídeos. Assim, se no
            final do contrato o inquilino resolver ir embora e deixar um buraco
            na parede, por exemplo, há um registro claro de que aquilo não
            estava lá quando ele se mudou.
          </p>

          <div className="text-3xl capitalize mt-5 mb-5 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            Dicas para Locadores e Locatários<br></br>
          </div>

          <p className="text-start">
            Para que a vistoria de imóvel alugado seja tranquila e segura tanto
            para o locatário quanto para o locador, há algumas dicas que fazem
            toda a diferença. Primeiramente, é fundamental que ambas as partes
            estejam presentes durante a vistoria a fim de estabelecer um
            ambiente de transparência e possibilitar esclarecimento de quaisquer
            dúvidas imediatamente. <br></br>
            <br></br>
            INQUILINO - Para os locatários, a preparação inicia com a leitura
            atenta do contrato de aluguel. Entenda suas obrigações,
            principalmente, em termos de manutenção do imóvel alugado. Se você
            já mora no imóvel e está se preparando para a vistoria de saída,
            primeiramente, analise o relatório da vistoria de entrada. Isso
            ajudará a reparar os danos que você possa ter causado durante o uso
            do imóvel de acordo com o relatório inicial. <br></br>
            <br></br>PROPRIETÁRIO - É dever do Locador preparar o imóvel para
            garantir que esteja em condições ideais para ser habitado. Isso
            significa fazer todas as manutenções necessárias antes da vistoria
            de entrada. Certifique-se de que tudo está funcionando corretamente,
            como por exemplo, as instalações elétricas e hidráulicas. Além
            disso, ter uma lista de verificação é muito útil para garantir que
            você não esqueça nenhum detalhe durante a vistoria. Se você é
            inquilino ou proprietário, tenha em mente que deve documentar tudo
            cuidadosamente. Por isso, tire fotos e faça vídeos detalhados de
            cada cômodo e itens específicos para proteger-se de “mal-entendidos”
            no futuro.
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
