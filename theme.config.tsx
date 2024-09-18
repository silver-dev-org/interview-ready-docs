import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Interview Ready</span>,
  project: {
    link: "https://github.com/conanbatt/interview-ready-docs",
  },
  chat: {
    link: "https://silver.dev/slack",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Interview Ready Documentation",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
