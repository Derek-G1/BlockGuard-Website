import * as React from "react";

export default function HtmlContent({ html }: { html: string }) {
  // This is static, trusted HTML produced from our own content build step.
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
