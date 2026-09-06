import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold tracking-tighter uppercase mb-4 text-neutral-200">
        404
      </h1>
      <h2 className="text-3xl font-bold tracking-wide uppercase mb-6 text-foreground">
        Page Not Found
      </h2>
      <p className="text-muted max-w-md mx-auto mb-10 text-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-foreground text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
