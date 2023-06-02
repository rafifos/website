import type { LinkType } from "./types";
import type { IconType } from "react-icons";

import { FaGithub } from "react-icons/fa";

const ExternalLinks: Record<LinkType, { title: string; url: string; icon: IconType }> = {
  "project-source": {
    title: "Veja o código fonte no GitHub",
    url: "https://github.com/rafifos/website",
    icon: FaGithub,
  },
};

export { ExternalLinks };
