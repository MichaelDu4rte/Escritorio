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
            MULTA POR RESCISÃO ANTECIPADA DO CONTRATO<br></br>
          </div>

          <p className="text-start">
            Contrato de aluguel e a multa por rescisão antecipada do contrato é
            tema delicado. Ao alugar imóvel, a ideia inicial é o inquilino
            permanecer no imóvel até o fim do prazo estipulado para a locação,
            porém imprevistos acontecem. Para manter uma boa relação entre
            proprietário e inquilino é essencial que ambos conheçam seus
            direitos, deveres e cláusulas contratuais.
          </p>

          <p className="text-start">
            A Lei do Inquilinato dispõe que: <br></br> <br></br>“Art. 4º.
            Durante o prazo estipulado para a duração do contrato, não poderá o
            locador reaver o imóvel alugado. Com exceção ao que estipula o § 2o
            do art. 54-A, o locatário, todavia, poderá devolvê-lo, pagando a
            multa pactuada, proporcional ao período de cumprimento do contrato,
            ou, na sua falta, a que for judicialmente estipulada. Parágrafo
            único. O locatário ficará dispensado da multa se a devolução do
            imóvel decorrer de transferência, pelo seu empregador, privado ou
            público, para prestar serviços em localidades diversas daquela do
            início do contrato, e se notificar, por escrito, o locador com prazo
            de, no mínimo, trinta dias de antecedência”.<br></br>
            <br></br> Logo, o proprietário não poderá solicitar a rescisão
            antecipada do contrato, salvo se houver uma das justificativas
            previstas em lei. É a chamada “denúncia cheia” ou “com justa causa”.
            Mas atenção, enquanto a locação vige por prazo determinado, o
            proprietário não pode retomar o imóvel por “denúncia vazia”, mesmo
            que pague a multa contratual. Além disso, não é toda “denúncia
            cheia” que autoriza a retomada do imóvel enquanto o contrato vige
            por tempo determinado. Vide artigos 9º e 47, Lei do Inquilinato.
            Entretanto, o inquilino pode devolver o imóvel a qualquer momento,
            desde que pague multa proporcional por quebra de contrato de
            aluguel.
          </p>

          <div className="text-3xl capitalize mt-5 md:text-5xl mb-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50 p-5">
            Tipos de Multa em Contrato de Aluguel
            <br></br>
          </div>
          <p className="text-start">
            É importante esclarecer que o contrato de aluguel pode aplicar dois
            tipos de multas.<br></br> <br></br>
            <strong>Multa Moratória:</strong> Não possui caráter punitivo, sendo
            aplicada, por exemplo, quando o aluguel ou condomínio são pagos com
            atraso.
            <br></br> <br></br>
            <strong>Multa Compensatória:</strong> Tem caráter punitivo, é
            aplicada, por exemplo, quando há descumprimento de cláusula
            contratual.
            <br></br> <br></br> Neste artigo iremos abordar apenas o tema
            envolvendo a multa compensatória. Nos contratos de aluguel com prazo
            determinado, a cobrança da referida multa, em caso de rescisão, é
            possível, enquanto nos contratos por prazo indeterminado, essa
            cobrança não se aplica. O cálculo da multa por quebra de contrato de
            aluguel é uma das principais dúvidas de proprietários (locador) e
            inquilinos (locatário). No caso de rescisão do contrato de aluguel
            antes do prazo ajustado é preciso atentar para a cláusula que trata
            da respectiva multa.
          </p>

          <div className="text-3xl capitalize mt-5 mb-5 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f9f4e5] to-[#cd9e80]  bg-opacity-50">
            Valor da multa
            <br></br>
          </div>

          <p className="text-start">
            A Lei do Inquilinato prevê a legalidade de cobrança da multa
            rescisória, ou seja, aquela que tem por objetivo recompensar a parte
            lesada por prejuízos em razão da quebra do contrato. Embora haja
            previsão legal permitindo a cobrança de multa rescisória, a lei não
            define valor ou percentual específico. Portanto, as partes
            contratantes devem acordar o valor da multa em uma cláusula
            contratual explícita, vedada abusividade. Na prática, a duração
            média de um contrato de aluguel é 30 meses e a multa rescisória
            aplicada é de 10% do valor total do contrato. Desse modo, em um
            contrato de 30 meses, a multa seria o valor de três meses de
            aluguel. Não se considera abusiva a fixação da multa rescisória com
            base no período de vigência do contrato de aluguel. Caso não haja
            previsão de cláusula penal contratual para rescisão antecipada no
            contrato firmado entre as partes, mantém-se o ajustado diante do
            princípio pacta sunt servanda. No entanto, se a multa prevista em
            contrato se mostrar excessiva é possível acionar o Poder Judiciário
            em busca da redução, nos termos do artigo 413, Código Civil.
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
