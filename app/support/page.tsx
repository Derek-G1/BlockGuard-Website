import HtmlContent from "@/components/HtmlContent";
import content from "@/content/pages.json";

export default function SupportPage() {
  // Convert the non-functional button into a mailto link (keeps the exact same styling).
  const html = content.support
    .replace(
      /<button id=\"emailSupportBtn\"/,
      '<a href="mailto:support@blockguard.app" id="emailSupportBtn"'
    )
    .replace(/<\/button>/, "</a>");

  return <HtmlContent html={html} />;
}
