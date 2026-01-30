import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Block Guard - Best Spam, Scam & Call Blocker for Android",
  description:
    "Stop unwanted calls with Block Guard. The ultimate spam call blocker and scam blocker for Android. Features neighbor spoofing protection, SMS filtering, and precise call blocking.",
  metadataBase: new URL("https://www.blockguard.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <link rel="icon" href="/Images/app_icon.webp" type="image/webp" />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
