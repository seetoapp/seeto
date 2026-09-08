import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const interests = [
  "Rayso — Hospitality OS",
  "MaalOS — Islamic banking",
  "Fetchflat — Fetch + extract API",
  "Seeto Exchange",
  "Seeto Systems",
  "Turaath — Volunteer",
  "Thahabi — Volunteer",
  "Partnership",
  "Other",
];

type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || message.trim().length < 12) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`SEETO · ${interest} · ${name}`);
    const body = encodeURIComponent(
      [
        message.trim(),
        "",
        "—",
        name.trim(),
        org.trim() && org.trim(),
        email.trim(),
        `Interest: ${interest}`,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
        <p className="text-[11px] tracking-[0.22em] text-primary uppercase">
          Message ready
        </p>
        <h3 className="mt-3 font-display text-3xl italic">Your mail client should be open.</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          If nothing appeared, write directly to{" "}
          <a href={`mailto:${company.email}`} className="text-primary">
            {company.email}
          </a>{" "}
          or reach us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
          autoComplete="name"
        />
      </Field>
      <Field label="Email">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          autoComplete="email"
        />
      </Field>
      <Field label="Organisation" optional>
        <input
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className={fieldClass}
          autoComplete="organization"
        />
      </Field>
      <Field label="Interest">
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={cn(fieldClass, "appearance-none")}
        >
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message">
        <textarea
          required
          minLength={12}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(fieldClass, "resize-y py-3")}
        />
      </Field>
      {status === "error" && (
        <p className="text-sm text-muted">
          Name, a valid email, and a short message are required.
        </p>
      )}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Compose message
      </Button>
      <p className="text-xs text-subtle">
        Opens your mail client addressed to {company.email}. Nothing is stored
        on this page.
      </p>
    </form>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-[11px] tracking-[0.2em] text-subtle uppercase">
        {label}
        {optional && <span className="tracking-normal normal-case">Optional</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const fieldClass =
  "h-12 w-full rounded-md bg-elevated px-4 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus:shadow-[var(--shadow-border-hover)]";
