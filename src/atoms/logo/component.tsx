import type { LogoProps } from "./types";

import clsx from "clsx";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

function Logo({ className }: LogoProps) {
  const classNames = clsx(className, jetBrainsMono.className, "text-xl normal-case");

  return (
    <Link href="/" className={classNames}>
      Rafifos//
    </Link>
  );
}

export default Logo;
