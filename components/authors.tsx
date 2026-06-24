import { Card } from "nextra/components";
import { LinkIcon } from "./icons";
import { useRouter } from "next/router";

function Author({ name, role, href }) {
  return (
    <Card
      href={href}
      icon={<LinkIcon className="color-4" />}
      //@ts-ignore
      title={
        <span className="author-block">
          <span className="author-name">{name}</span>
          <br />
          <span className="author-role">{role}</span>
        </span>
      }
    />
  );
}

function useLoadMeta() {
  const router = useRouter();
  const { asPath } = router;
  const pagePath = asPath.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  const metaPath = pagePath.replace(/\/[^\/]*$/, "");
  const pageKey = pagePath.split("/").filter(Boolean).pop() || "index";
  const meta = require(`../pages${metaPath}/_meta.json`);
  const pageMeta = meta[pageKey];

  return pageMeta?.authors ?? meta.authors;
}

export function Authors() {
  const authors = useLoadMeta();

  if (!authors) {
    return;
  }
  return (
    <>
      <span className="authors-title">Autores</span>
      {authors.values.map((author) => (
        <Author key={author.name} {...author} />
      ))}
    </>
  );
}
