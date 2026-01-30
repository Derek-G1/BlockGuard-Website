import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link className="mt-6 inline-block rounded-xl border px-4 py-2 no-underline hover:bg-zinc-50 dark:hover:bg-zinc-900" href="/">
        Go home
      </Link>
    </div>
  );
}
