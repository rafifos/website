import { Logo } from "@/atoms/logo";
import { SwitchTheme } from "@/molecules/theme-switcher";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-start">
        <Logo className="btn-ghost btn" />
      </div>
      <div className="navbar-end">
        <SwitchTheme />
      </div>
    </header>
  );
}

export default Header;
