import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { addressLine, company, postalLine } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact — SEETO" }],
  }),
});

function ContactPage() {
  return (
    <main className="bg-bg pt-28 pb-24 text-fg">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
              Contact
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
              Talk to Seeto.
            </h1>
            <p className="mt-6 text-muted">
              Product, partnership, or a system that has to hold. We read every
              note that lands at {company.email}.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Email
              </p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 block text-lg text-primary hover:underline"
              >
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Phone / WhatsApp
              </p>
              <a
                href={`tel:${company.phoneTel}`}
                className="mt-2 block text-lg hover:text-primary"
              >
                {company.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                Office
              </p>
              <p className="mt-2 leading-relaxed">
                {addressLine}
                <br />
                {postalLine}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <img
              src="/images/signal-still.jpg"
              alt=""
              className="aspect-[16/7] w-full rounded-lg object-cover"
            />
            <div className="p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
