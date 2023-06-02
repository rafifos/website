import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

function Footer() {
  return (
    <footer className="footer footer-center bg-primary p-10 text-primary-content">
      <div>
        <Link href="/" className={`${jetBrainsMono.className} text-xl normal-case`}>
          Rafifos//
        </Link>

        <p className="font-bold">Copyright © 2023 - Rafael Julio Lemos Silva</p>
      </div>
    </footer>
  );
}

export default Footer;
