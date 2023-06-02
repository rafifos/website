import type { ContactMethod } from "./types";
import type { IconType } from "react-icons";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactLinks: Record<ContactMethod, { title: string; url: string; icon: IconType }> = {
  linkedin: {
    title: "Entrar em contato usando o LinkedIn",
    url: "https://www.linkedin.com/in/rafifos",
    icon: FaLinkedin,
  },
  github: {
    title: "Dê uma olhada no meu GitHub",
    url: "https://github.com/rafifos",
    icon: FaGithub,
  },
  mail: {
    title: "Entrar em contato usando o e-mail",
    url: "mailto:work@rafifos.dev",
    icon: MdMail,
  },
};

export { ContactLinks };
