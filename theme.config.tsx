import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Authors } from "./components/authors";

const config: DocsThemeConfig = {
  primaryHue: 25,
  primarySaturation: 95,
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
          href="https://github.com/conanbatt/interview-ready-docs"
        >
          Ayudanos a mejorarla!
        </a>
      </>
    ),
  },
  search: {
    placeholder: "Buscar en la documentación...",
  },
  head: (
    <>
      <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="images/favicon.png" type="image/png" />
    </>
  ),
  logo: (
    <>
      <img
        style={{ position: "relative", right: "21px" }}
        width="180"
        src="/images/silver-logo-white.svg"
      />
    </>
  ),
  darkMode: false,
  nextThemes: { defaultTheme: "dark" },
  project: {
    link: "https://silver.dev/repo",
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
    link: "https://silver.dev/slack",
  },
  docsRepositoryBase:
    "https://github.com/conanbatt/interview-ready-docs/blob/main",
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
    //component: ,
    //extraContent: <Authors />,
    title: <Authors />,
  },
  feedback: {
    content: "Mandanos feedback",
  },
};

export default config;
