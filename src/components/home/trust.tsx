import { Reveal } from "@/components/reveal";
import { company } from "@/lib/company";

const facts = [
  { label: "Legal name", value: company.legalName },
  { label: "Company number", value: company.companyNumber },
  { label: "D-U-N-S", value: company.duns },
  { label: "Registered", value: company.registered },
  { label: "Structure", value: company.structure },
  { label: "Registry", value: company.registry },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 text-fg sm:py-32">
      <img
        src="/images/nairobi-aerial.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="scrim-trust absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            Corporate
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            A Kenyan private limited company,{" "}
            <span className="italic">on the record.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Incorporated under {company.act}. D-U-N-S issued and verified
            through the national registry and documents provided by the company.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-line shadow-[var(--shadow-border)] sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.04}>
              <article className="h-full bg-surface/90 p-6 backdrop-blur-sm">
                <p className="text-[11px] tracking-[0.2em] text-subtle uppercase">
                  {f.label}
                </p>
                <p className="mt-3 text-sm leading-snug text-fg">{f.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
