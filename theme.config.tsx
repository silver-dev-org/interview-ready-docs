import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Authors } from "./components/authors";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <>
      <img
        src="/images/silver-logo-white.svg"
        alt="Logo"
        className="logo logo-dark"
      />
      <img
        src="/images/silver-logo-black.svg"
        alt="Logo"
        className="logo logo-light"
      />
    </>
  );
};

const SITE_URL = "https://docs.silver.dev";
const DEFAULT_DESCRIPTION =
  "Documentación oficial de Silver.dev - Mejorá tu rendimiento en entrevistas";
const DEFAULT_OG_IMAGE = "/images/og-image.png";

const config: DocsThemeConfig = {
  primaryHue: 25,
  primarySaturation: 95,
  useNextSeoProps() {
    return { titleTemplate: "%s - Silver.dev" };
  },
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();
    const url =
      SITE_URL + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const fullTitle = `${title} - Silver.dev`;
    const description = frontMatter.description || DEFAULT_DESCRIPTION;
    const image = SITE_URL + (frontMatter.image || DEFAULT_OG_IMAGE);

    return (
      <>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Silver.dev Docs" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </>
    );
  },
  banner: {
    key: "1",
    dismissible: true,
    text: (
      <>
        ⚙ La documentación de Interview Ready es abierta.{" "}
        <a
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/silver-dev-org/interview-ready-docs"
        >
          Ayudanos a mejorarla!
        </a>
      </>
    ),
  },
  search: {
    placeholder: "Buscar en la documentación...",
  },
  logo: () => <Logo />,
  nextThemes: { defaultTheme: "dark" },
  project: {
    link: "https://github.com/silver-dev-org/interview-ready",
  },
  chat: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-slack"
        viewBox="0 0 16 16"
      >
        <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682S16 4.964 16 5.889s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68s.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681z" />
      </svg>
    ),
    link: "https://silver.dev/community",
  },
  docsRepositoryBase:
    "https://github.com/silver-dev-org/interview-ready-docs/blob/main",
  footer: {
    text: "Interview Ready Documentation",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: "Editá esta página",
  },
  toc: {
    //component: null,
    //extraContent: <Authors />,
    title: <Authors />,
  },
  feedback: {
    content: "Mandanos feedback",
  },
};

export default config;
