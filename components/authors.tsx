import { Card } from "nextra/components";
import { LinkIcon } from "./icons";
import { useRouter } from "next/router";

function Author({ name, role, href }) {
  return (
    <Card
      href={href}
      icon={<LinkIcon />}
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
  const metaPath = asPath.replace(/\/[^\/]*$/, "");
  const meta = require(`../pages${metaPath}/_meta.json`);
  return meta;
}

export function Authors() {
  const meta = useLoadMeta();

  if (!meta.authors) {
    return;
  }
  return (
    <>
      <span className="authors-title">Autores</span>
      {meta.authors.values.map((author) => (
        <Author key={author.name} {...author} />
      ))}
    </>
  );
}
