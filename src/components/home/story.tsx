import { Reveal } from "@/components/reveal";

const pillars = [
  {
    n: "01",
    title: "Live, not later",
    copy: "Hospitality floors, marketplaces and payment rails do not wait for a retry. We build for the moment the request arrives.",
  },
  {
    n: "02",
    title: "One picture of the work",
    copy: "Modules share a database. Orders, stock, money and people stay in the same operational truth.",
  },
  {
    n: "03",
    title: "Nairobi in the grain",
    copy: "Offline hours, M-Pesa, multi-branch groups, and the way East African operators actually move. Designed here, not adapted later.",
  },
];

export function Story() {
  return (
    <section className="bg-surface py-24 text-fg sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
              How we work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Communications, treated as{" "}
              <span className="italic">systems.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Seeto is a product studio and an operating company. We ship our
              own platforms, and we build the infrastructure other teams cannot
              afford to get wrong — real-time matching, wallets, mobility, and
              the backends underneath.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-line border-y border-line">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <article className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
                  <p className="font-mono text-xs text-primary">{p.n}</p>
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
