"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent hydration mismatch while next-themes resolves system theme
    return (
      <button className="rounded-xl border px-3 py-2 text-sm" aria-label="Toggle theme" disabled>
        Theme
      </button>
    );
  }

  const current = (theme === "system" ? resolvedTheme : theme) ?? "light";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      className="rounded-xl border px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      type="button"
    >
      {current === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
