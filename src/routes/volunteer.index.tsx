import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { statusLabel } from "@/lib/products";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/volunteer/")({
  component: VolunteerIndex,
  head: () => ({
    meta: [{ title: "Volunteer — SEETO" }],
  }),
});

function VolunteerIndex() {
  return (
    <main className="bg-bg pt-28 pb-24 text-fg sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            Volunteer
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl">
            Work we give, <span className="italic">and keep running.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Seeto builds commercial products. We also give time to heritage
            platforms — a Somali scholarly archive, and a digital Shamilah —
            because the work is worth doing.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                to="/volunteer/$slug"
                params={{ slug: project.slug }}
                className="group grid overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow] duration-250 hover:shadow-[var(--shadow-border-hover)] lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:col-span-5 lg:aspect-auto lg:min-h-[280px]">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 px-5 py-6 sm:px-8 lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                        {project.kicker}
                      </p>
                      <span className="rounded-full bg-fg/6 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-primary uppercase">
                        Volunteer · {statusLabel[project.status]}
                      </span>
                    </div>
                    <h2 className="mt-3 text-3xl font-medium">{project.name}</h2>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                      {project.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-fg">
                    View project
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
