export type ProductStatus = "live" | "private" | "building";

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  body: string[];
  status: ProductStatus;
  href?: string;
  hrefLabel?: string;
  image: string;
  gallery: string[];
  accent: string;
  modules: { title: string; copy: string }[];
};

export const products: Product[] = [
  {
    slug: "rayso",
    name: "Rayso",
    kicker: "Hospitality OS",
    tagline: "The operating system for restaurants and hotels.",
    summary:
      "Offline-first POS, kitchen, QR menus, front desk, inventory and finance — one platform that keeps selling when the internet does not.",
    body: [
      "Rayso is built for Kenyan and East African hospitality: cafés that cannot pause a lunch rush, hotels that post restaurant charges to a room folio, and groups that run more than one property from a single account.",
      "Every module shares one database. A table order, a room reservation, a stock count and a payroll run are the same operational picture — not a pile of integrations.",
    ],
    status: "live",
    href: "https://rayso.net",
    hrefLabel: "Open rayso.net",
    image: "/images/restaurant-pos.jpg",
    gallery: [
      "/images/restaurant-pos.jpg",
      "/images/hotel-lobby.jpg",
      "/images/cafe-counter.jpg",
    ],
    accent: "Hospitality",
    modules: [
      {
        title: "Offline-first POS",
        copy: "The Rayso Relay keeps tills live locally and syncs the moment the line returns. Receipt numbers stay in sequence.",
      },
      {
        title: "Kitchen display",
        copy: "Tickets route in real time across stations. Bump, recall, and track prep without a printer pile-up.",
      },
      {
        title: "Hotel PMS",
        copy: "Reservations, folios, groups and housekeeping. Restaurant orders post straight to the room.",
      },
      {
        title: "QR menus",
        copy: "Branded digital menus with live prices — no reprinting when the board changes.",
      },
      {
        title: "Inventory",
        copy: "Stock, purchasing, waste and low-stock alerts tied to what actually left the pass.",
      },
      {
        title: "Finance & payroll",
        copy: "Journals, invoices, multi-currency and shifts that close themselves at the end of service.",
      },
    ],
  },
  {
    slug: "exchange",
    name: "Seeto Exchange",
    kicker: "Real-time marketplace",
    tagline: "Providers and customers, matched live.",
    summary:
      "A dynamic exchange that connects service providers with the people who need them — in real time, with a backend built for concurrency.",
    body: [
      "Seeto began as an exchange: a marketplace that treats availability, reputation and fulfilment as live signals, not a directory that goes stale overnight.",
      "The platform is designed around the messy reality of East African services — last-minute demand, mobile money, and operators who live on their phones.",
    ],
    status: "private",
    image: "/images/workshop-exchange.jpg",
    gallery: ["/images/workshop-exchange.jpg", "/images/signal-still.jpg"],
    accent: "Marketplace",
    modules: [
      {
        title: "Live matching",
        copy: "Requests land against providers who are actually available, not a static list.",
      },
      {
        title: "Provider operations",
        copy: "Profiles, calendars, fulfilment status and earnings in one operator view.",
      },
      {
        title: "Customer flow",
        copy: "Ask, book, pay, rate — a short path from need to done.",
      },
      {
        title: "Real-time core",
        copy: "Event-driven matching built for spikes, not for a quiet demo.",
      },
    ],
  },
  {
    slug: "marhaba",
    name: "Marhaba",
    kicker: "Engineering talent",
    tagline: "See how an engineer actually thinks.",
    summary:
      "Structured evaluation for hiring engineering talent — systems design, take-homes and live work that go deeper than a CV.",
    body: [
      "Marhaba is how we evaluate engineers the way we would want to be evaluated: on architecture, trade-offs and the quality of the work, not on theatre.",
      "It is being built in Nairobi for teams that hire across East Africa and need a signal they can trust.",
    ],
    status: "building",
    image: "/images/studio.jpg",
    gallery: ["/images/studio.jpg", "/images/ops-room.jpg"],
    accent: "Talent",
    modules: [
      {
        title: "Systems design",
        copy: "Scored design interviews that reveal how a candidate reasons under constraint.",
      },
      {
        title: "Take-home work",
        copy: "Short, realistic tasks with a rubric — not weekend-long unpaid projects.",
      },
      {
        title: "Live pairing",
        copy: "A structured session that watches collaboration, not just syntax.",
      },
      {
        title: "Signal, not theatre",
        copy: "Reports written for hiring managers who have to make a call this week.",
      },
    ],
  },
  {
    slug: "systems",
    name: "Seeto Systems",
    kicker: "Custom platforms",
    tagline: "High-concurrency infrastructure, built to last.",
    summary:
      "We design and ship the hard parts: payments, mobility, wallets, and distributed backends that have to stay up.",
    body: [
      "Before Seeto was a company name, it was a way of working: Go, gRPC, NATS, Postgres, and systems that survive a Friday night spike.",
      "Seeto Systems is that practice as a product line — architecture, delivery and operations for teams that cannot afford a rewrite in eighteen months.",
    ],
    status: "live",
    image: "/images/ops-room.jpg",
    gallery: ["/images/ops-room.jpg", "/images/cables.jpg", "/images/signal-still.jpg"],
    accent: "Infrastructure",
    modules: [
      {
        title: "Distributed systems",
        copy: "Microservices, event buses and the boring reliability work that actually matters.",
      },
      {
        title: "Payments & wallets",
        copy: "Remittance, mobile money and core-adjacent flows with the compliance surface in view.",
      },
      {
        title: "Real-time location",
        copy: "Assignment, tracking and the messy physics of vehicles in African cities.",
      },
      {
        title: "Performance",
        copy: "Latency budgets, load tests, and the last ten percent that users actually feel.",
      },
    ],
  },
];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  private: "Private",
  building: "In build",
};
