import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export function HomeCta() {
  return (
    <section className="bg-surface py-24 text-fg sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
              Tell us what needs to{" "}
              <span className="italic">stay live.</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted">
              Hospitality, marketplaces, talent, or a system that has to hold.
              Write to {company.email} or start a conversation from Kilimani.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <Button asChild size="lg">
            <Link to="/contact">
              Start a conversation
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
