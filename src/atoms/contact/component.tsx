import type { ContactLinkProps } from "./types";

import Link from "next/link";

import { ContactLinks } from "@/atoms/contact/constants";

function Contact({ method }: ContactLinkProps) {
  const contactInfo = ContactLinks[method];

  const title = contactInfo.title;
  const url = contactInfo.url;
  const Icon = contactInfo.icon;

  return (
    <Link href={url} role="button" className="btn btn-square btn-ghost" title={title}>
      <Icon size={32} />
    </Link>
  );
}

export default Contact;
