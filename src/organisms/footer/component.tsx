import { Logo } from "@/atoms/logo";

function Footer() {
  return (
    <footer className="footer footer-center bg-primary p-10 text-primary-content">
      <div>
        <Logo />
        <p className="font-bold">Copyright © 2023 - Rafael Julio Lemos Silva</p>
      </div>
    </footer>
  );
}

export default Footer;
