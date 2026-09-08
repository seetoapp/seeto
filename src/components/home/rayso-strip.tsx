import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function RaysoStrip() {
  return (
    <section className="bg-bg py-24 text-fg sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <div className="grid overflow-hidden rounded-lg lg:grid-cols-2">
              <div className="relative min-h-[280px]">
                <img
                  src="/images/hotel-lobby.jpg"
                  alt="Boutique Nairobi hotel lobby running on Rayso"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 bg-elevated p-8 sm:p-12">
                <div>
                  <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
                    Flagship · Live
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight">
                    Rayso keeps the floor{" "}
                    <span className="italic">selling.</span>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    POS, kitchen, QR menus, front desk, inventory and finance —
                    one hospitality OS that does not stop when the internet
                    does. Built for restaurants and hotels that cannot lose a
                    service.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="https://rayso.net" target="_blank" rel="noreferrer">
                      Open rayso.net
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/products/$slug" params={{ slug: "rayso" }}>
                      Read the product
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
