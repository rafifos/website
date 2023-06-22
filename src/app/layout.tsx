import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import Providers from "@/app/providers";
import { Footer } from "@/organisms/footer";
import { Header } from "@/organisms/header";
import { inter, iosevka } from "@/styles/fonts";

const metadata: Metadata = {
  title: "Rafael Julio | Desenvolvedor Front-End",
  description:
    "Desenvolvedor Front-End especializado em Next.js, TypeScript e Ecossistema JavaScript/TypeScript com expertise em Design Systems.",
};

function RootLayout({ children }: { children: ReactNode }) {
  const classNames = clsx(
    inter.variable,
    iosevka.variable,
    "mx-auto flex h-screen flex-col font-sans"
  );

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={classNames}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
