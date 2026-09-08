import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";
import { statusLabel } from "@/lib/products";

export function VolunteerBand() {
  return (
    <section id="volunteer" className="bg-surface py-24 text-fg sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            Volunteer
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Work we give,{" "}
              <span className="italic">not a product line.</span>
            </h2>
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
            >
              All volunteer work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <p className="mt-6 max-w-xl text-muted">
            Heritage platforms we build and keep running — a Somali scholarly
            archive, and a Shamilah of more than twenty-nine thousand books.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                to="/volunteer/$slug"
                params={{ slug: project.slug }}
                className="group block overflow-hidden rounded-xl bg-elevated p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-250 ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                  <div className="scrim-photo absolute inset-0" />
                  <span className="absolute top-3 left-3 rounded-full bg-bg/70 px-3 py-1 text-[10px] tracking-[0.2em] text-fg uppercase backdrop-blur-sm">
                    Volunteer · {statusLabel[project.status]}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 px-4 pt-5 pb-4">
                  <div>
                    <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                      {project.kicker}
                    </p>
                    <h3 className="mt-1 text-xl font-medium">{project.name}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="mb-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-fg/6 text-fg transition-colors group-hover:bg-primary group-hover:text-primary-fg">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
