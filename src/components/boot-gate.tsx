import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Mark } from "@/components/logo";
import { cn } from "@/lib/utils";

function nextPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function isReady(el: HTMLImageElement | HTMLVideoElement) {
  if (el instanceof HTMLImageElement) {
    return el.complete && el.naturalWidth > 0;
  }
  if (el.readyState >= 2) return true;
  const poster = el.getAttribute("poster");
  if (!poster) return false;
  const img = new Image();
  img.src = poster;
  return img.complete;
}

function waitFor(el: HTMLImageElement | HTMLVideoElement) {
  if (isReady(el)) return Promise.resolve();

  if (el instanceof HTMLImageElement) {
    return new Promise<void>((resolve) => {
      const done = () => resolve();
      el.addEventListener("load", done, { once: true });
      el.addEventListener("error", done, { once: true });
    });
  }

  const poster = el.getAttribute("poster");
  if (poster) {
    const img = new Image();
    img.src = poster;
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
      el.addEventListener("loadeddata", done, { once: true });
    });
  }

  return new Promise<void>((resolve) => {
    const done = () => resolve();
    el.addEventListener("loadeddata", done, { once: true });
    el.addEventListener("error", done, { once: true });
  });
}

function aboveFoldMedia() {
  const nodes = [
    ...document.querySelectorAll<HTMLImageElement | HTMLVideoElement>(
      "main img, main video",
    ),
  ];
  return nodes.filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight + 40;
  });
}

export function BootGate({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isRouteLoading = useRouterState({ select: (s) => s.isLoading });
  const [ready, setReady] = useState(false);
  const show = !ready || isRouteLoading;

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await nextPaint();
      if (cancelled) return;

      const media = aboveFoldMedia();
      const fonts = document.fonts?.ready ?? Promise.resolve();
      const fontsReady = !document.fonts || document.fonts.status === "loaded";

      if (media.every(isReady) && fontsReady) {
        if (!cancelled) setReady(true);
        return;
      }

      setReady(false);
      await Promise.race([
        Promise.all([fonts, ...media.map(waitFor)]),
        new Promise<void>((resolve) => setTimeout(resolve, 3500)),
      ]);
      if (!cancelled) setReady(true);
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          "transition-opacity duration-500 ease-[var(--ease-out)]",
          show && "pointer-events-none opacity-0",
        )}
        aria-hidden={show}
        {...(show ? { inert: true } : {})}
      >
        {children}
      </div>

      <div
        className={cn(
          "boot-overlay",
          show ? "boot-overlay-on" : "boot-overlay-off",
        )}
        role="status"
        aria-live="polite"
        aria-busy={show}
        aria-hidden={!show}
      >
        <div className="boot-mark">
          <span className="boot-ring" />
          <span className="boot-ring boot-ring-delay" />
          <Mark className="relative size-12 text-primary" />
        </div>
        <p className="mt-6 text-[13px] font-semibold tracking-[0.32em] text-fg">
          SEETO
        </p>
        <p className="mt-2 text-[10px] tracking-[0.28em] text-muted uppercase">
          Loading
        </p>
      </div>
    </>
  );
}
