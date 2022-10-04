import type { ReactNode } from "react";

import Link from "next/link";
import classNames from "classnames";

import styles from "./app.module.scss";
import { Logo } from "@/components";

interface AppTemplateProps {
  children: ReactNode;
}

function AppTemplate({ children }: AppTemplateProps) {
  const cx = classNames.bind(styles);
  const headerCn = cx("container-fluid", styles["header"]);

  return (
    <>
      <header className={headerCn}>
        <Link href="/" as="a">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <Link href="/disclaimer" passHref>
            Disclaimer
          </Link>
        </nav>
      </header>

      <nav aria-labelledby="mainnavheader">
        <h2 id="mainnavheader">Navigation Menu</h2>…
      </nav>

      <main className="container">
        {children}

        <aside aria-labelledby="latestheader">
          <h3 id="latestheader">Latest Articles</h3>
          <ul>
            <li>
              <a href="#">Latest Article Title 1</a>
            </li>
            <li>
              <a href="#">Latest Article Title 2</a>
            </li>
            <li>
              <a href="#">Latest Article Title 3</a>
            </li>
          </ul>
        </aside>
      </main>

      <footer>
        <p>© SpaceTeddy Inc.</p>
      </footer>
    </>
  );
}

export default AppTemplate;
