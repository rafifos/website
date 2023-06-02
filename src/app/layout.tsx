import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";

import Providers from "@/app/providers";
import { Header } from "@/organisms/header";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Rafael Julio | Desenvolvedor Front-End",
  description:
    "Desenvolvedor Front-End especializado em Next.js, TypeScript e Ecossistema JavaScript/TypeScript com expertise em Design Systems.",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;