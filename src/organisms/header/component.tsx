import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

import { SwitchTheme } from "@/molecules/switch-theme";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-start">
        <Link href="/" className={`${jetBrainsMono.className} btn btn-ghost normal-case text-xl`}>
          Rafifos//
        </Link>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
      </div>
    </header>
  );
}

export default Header;