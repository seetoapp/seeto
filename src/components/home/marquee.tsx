const items = [
  "Hospitality OS",
  "Islamic finance",
  "Housing marketplaces",
  "Real-time matching",
  "Payments & wallets",
  "Distributed systems",
  "Offline-first POS",
  "Murabaha lifecycle",
  "Mobile money",
  "Engineering talent",
  "Edge operations",
];

export function CapabilityMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4">
      <div className="marquee-track gap-10 px-6">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-[11px] tracking-[0.28em] text-muted uppercase"
          >
            {item}
            <span className="size-1 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
