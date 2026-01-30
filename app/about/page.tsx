import HtmlContent from "@/components/HtmlContent";
import content from "@/content/pages.json";

export default function Page() {
  return <HtmlContent html={content.about} />;
}
