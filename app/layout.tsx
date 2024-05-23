import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Simone | Advocacia",
  description:
    "O Escritório Simone Gonçalves Advocacia, localizado na cidade de Porto Alegre/RS, segue moderna tendência internacional ao adotar o modelo de “boutique jurídica”, formato que no Brasil tem como principais características a alta especialização, atuação personalizada e rápida, permitindo assim atendimento em Direito Imobiliário e Condominial através da identificação de problemas específicos envolvidos em cada caso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
