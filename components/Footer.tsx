import Link from "next/link";

const guideLinks = [
  { href: "/guides/", label: "Guides" },
  { href: "/stop-robocalls-android/", label: "Stop Robocalls" },
  { href: "/block-scam-calls/", label: "Block Scam Calls" },
  { href: "/neighbor-spoofing-protection/", label: "Neighbor Spoofing" },
  { href: "/block-unknown-numbers-android/", label: "Block Unknown Numbers" },
  { href: "/sms-spam-blocker-android/", label: "SMS Spam Blocker" },
  { href: "/call-blocker-for-seniors/", label: "Call Blocker for Seniors" },
  { href: "/how-to-block-text-spam-android/", label: "Block Text Spam" },
  { href: "/best-call-blocker-android/", label: "Best Call Blocker" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
          <Link className="page-link hover:underline" href="/privacy/">
            Privacy Policy
          </Link>
          <Link className="page-link hover:underline" href="/terms/">
            Terms of Service
          </Link>
          <Link className="page-link hover:underline" href="/support/">
            Support
          </Link>
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span className="font-semibold">
            Guides:{" "}
            {guideLinks.map((l, idx) => (
              <span key={l.href}>
                <Link className="hover:underline" href={l.href}>
                  {l.label}
                </Link>
                {idx < guideLinks.length - 1 ? " • " : ""}
              </span>
            ))}
          </span>
        </div>

        <p>© {year} RadStorm Technologies LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
