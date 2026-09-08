import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-bg px-6 text-center text-fg">
      <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl italic">This path is dark.</h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        The page you asked for is not on the Seeto network.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to SEETO</Link>
      </Button>
    </main>
  );
}
