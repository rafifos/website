import type { ContactLinkProps } from "./types";

import Link from "next/link";

import { ContactLinks } from "@/atoms/contact/constants";

function Contact({ method }: ContactLinkProps) {
  const contactInfo = ContactLinks[method];

  const title = contactInfo.title;
  const url = contactInfo.url;
  const Icon = contactInfo.icon;

  return (
    <Link href={url} role="button" className="btn-ghost btn-square btn" title={title}>
      <Icon size={32} />
    </Link>
  );
}

export default Contact;
