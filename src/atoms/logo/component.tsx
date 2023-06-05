import type { LogoProps } from "./types";

import clsx from "clsx";
import Link from "next/link";

import { jetBrainsMono } from "@/utils/fonts";

function Logo({ className }: LogoProps) {
  const classNames = clsx(className, jetBrainsMono.className, "text-xl normal-case");

  return (
    <Link href="/" className={classNames}>
      Rafifos//
    </Link>
  );
}

export default Logo;
