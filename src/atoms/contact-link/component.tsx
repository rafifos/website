import type { ContactLinkProps } from "./types";

import Link from "next/link";

import { ContactLinks } from "@/atoms/contact-link/constants";

function ContactLink({ method }: ContactLinkProps) {
  const contactInfo = ContactLinks[method];

  const title = contactInfo.title;
  const url = contactInfo.url;
  const Icon = contactInfo.icon;

  return (
    <Link href={url}>
      <button className="btn btn-ghost btn-circle" type="button" title={title}>
        <Icon size={32} />
      </button>
    </Link>
  );
}

export default ContactLink;
