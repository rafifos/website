import type { ExternalLinkProps } from "./types";

import Link from "next/link";

import { ExternalLinks } from "./constants";

function ExternalLink({ type }: ExternalLinkProps) {
  const linkInfo = ExternalLinks[type];

  const title = linkInfo.title;
  const url = linkInfo.url;
  const Icon = linkInfo.icon;

  return (
    <Link
      href={url}
      target="_blank"
      role="button"
      className="btn btn-square btn-ghost"
      title={title}
    >
      <Icon size={32} />
    </Link>
  );
}

export default ExternalLink;
