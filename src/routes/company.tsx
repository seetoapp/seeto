import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { addressLine, company, postalLine } from "@/lib/company";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [{ title: "Company — SEETO COMMUNICATION LIMITED" }],
  }),
});

const rows = [
  ["Legal name", company.legalName],
  ["Company number", company.companyNumber],
  ["D-U-N-S Number", company.duns],
  ["Date of registration", company.registered],
  ["Governing law", company.act],
  ["Legal structure", company.structure],
  ["Registrar", company.registry],
];

export function CompanyPage() {
  return (
    <main className="bg-bg pt-28 pb-24 text-fg">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            Company
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl">
            {company.legalName}
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Incorporated in Kenya on {company.registered}. Private limited
            company. D-U-N-S {company.duns} issued and verified through the
            national registry.
          </p>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
          <img
            src="/images/kilimani-dusk.jpg"
            alt="Kilimani, Nairobi — registered office locality"
            className="aspect-[21/8] w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl italic">Registry record</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {rows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6"
                >
                  <dt className="text-[11px] tracking-[0.18em] text-subtle uppercase">
                    {label}
                  </dt>
                  <dd className="sm:col-span-2 text-sm sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-subtle">
              Records held by the Companies Registry as at {company.registered}.
              D-U-N-S verified through the national registry and documents
              provided by the company. This page is a company disclosure, not a
              government certificate.
            </p>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]">
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Registered office
              </p>
              <p className="mt-4 text-lg leading-snug">{addressLine}</p>
              <p className="mt-2 text-sm text-muted">{postalLine}</p>
              <p className="mt-4 text-sm text-muted">
                {company.address.district} · {company.address.county}
              </p>
            </div>
            <div className="rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]">
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Director
              </p>
              <p className="mt-4 text-xl">{company.director.name}</p>
              <p className="mt-1 text-sm text-muted">
                {company.director.role} · {company.director.nationality}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Founder and technical principal. Systems architecture, product
                and the operating company behind Rayso, MaalOS, Fetchflat
                and Seeto Systems.
              </p>
            </div>
            <div className="rounded-xl bg-elevated p-7">
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Contact
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${company.email}`}
                  className="text-primary hover:underline"
                >
                  {company.email}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={`tel:${company.phoneTel}`}
                  className="hover:text-primary"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Write to Seeto</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
