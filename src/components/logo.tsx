import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <circle cx="11" cy="16" r="3.1" fill="currentColor" />
      <path
        d="M16.2 10.2a8.2 8.2 0 0 1 0 11.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20.4 6.8a13 13 0 0 1 0 18.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-2.5 text-fg",
        className,
      )}
      aria-label="SEETO home"
    >
      <span className="text-primary">
        <Mark />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.22em]">
          SEETO
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[9px] tracking-[0.28em] text-muted uppercase sm:block">
            Communication
          </span>
        )}
      </span>
    </Link>
  );
}
