import type { ExternalLinkProps } from "./types";

import Link from "next/link";

import { ExternalLinks } from "./constants";

function ExternalLink({ type }: ExternalLinkProps) {
  const linkInfo = ExternalLinks[type];

  const title = linkInfo.title;
  const url = linkInfo.url;
  const Icon = linkInfo.icon;

  return (
    <Link href={url} target="_blank">
      <button className="btn-ghost btn-square btn" type="button" title={title}>
        <Icon size={32} />
      </button>
    </Link>
  );
}

export default ExternalLink;
