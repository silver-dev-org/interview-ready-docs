import React from "react";
import { Callout } from "nextra-theme-docs";

export function Embed({ src }) {
  return (
    <iframe
      width="100%"
      height="450"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

export function IREmbed({ src }) {
  return (
    <div className="irembed-wrapper">
      <Embed src={src} />
      <Callout type="info">
        El video completo disponible en{" "}
        <a
          href="https://ready.silver.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Interview Ready
        </a>
        .
      </Callout>
    </div>
  );
}
