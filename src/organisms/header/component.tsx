import { ExternalLink } from "@/atoms/external-link";
import { Logo } from "@/atoms/logo";
import { ThemeSwitcher } from "@/molecules/theme-switcher";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-start">
        <Logo className="btn-ghost btn" />
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <ExternalLink type="project-source" />
      </div>
    </header>
  );
}

export default Header;
