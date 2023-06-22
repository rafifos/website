import type { LogoProps } from "./types";

import clsx from "clsx";
import Link from "next/link";

function Logo({ className }: LogoProps) {
  const classNames = clsx(className, "font-mono text-xl normal-case");

  return (
    <Link href="/" className={classNames}>
      Rafifos//
    </Link>
  );
}

export default Logo;
