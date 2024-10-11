import React from "react";
import { Card } from "nextra-theme-docs";

export function Resource({ title, description, href, icon }) {
  return (
    <div className="resource-card">
      <Card
        href={href}
        icon={icon}
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
