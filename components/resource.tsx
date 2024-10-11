import React from "react";
import { Card } from "nextra-theme-docs";
import { BoxIcon } from "./icons";

export function Resource({ title, description, href, icon }) {
  return (
    <div className="resource-card icon-color-red">
      <Card
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        icon={<BoxIcon />}
        //@ts-ignore
        title={
          <span className="resource-block">
            <span className="resource-title">{title}</span>
            <br />
            <span className="resource-description">{description}</span>
          </span>
        }
      />
    </div>
  );
}
