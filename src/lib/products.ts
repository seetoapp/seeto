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
    slug: "maalos",
    name: "MaalOS",
    kicker: "Islamic banking",
    tagline: "Banking systems that speak Murabaha natively.",
    summary:
      "A modular platform for Islamic banks — SME financing, digital channels, agency banking and compliance. Shariah-first, on-premise, live in twelve weeks.",
    body: [
      "Global cores were not built for this market. Legacy Islamic vendors charge millions, take years, and treat East Africa as an afterthought. MaalOS is the missing piece: a working product that ships, then gets shaped around the bank.",
      "AAOIFI by design. Deployed on your servers. Configured to your approval hierarchies, document templates and reports — not a two-year rewrite.",
    ],
    status: "live",
    href: "https://maalos.io",
    hrefLabel: "Open maalos.io",
    image: "/images/maalos-finance.jpg",
    gallery: [
      "/images/maalos-finance.jpg",
      "/images/maalos-digital.jpg",
      "/images/ops-room.jpg",
    ],
    accent: "Banking",
    modules: [
      {
        title: "MaalOS Finance",
        copy: "The full Murabaha lifecycle: onboarding, credit, Shariah-compliant contracts, disbursement, installments, collateral and arrears. SS-8, FAS 28, SME.",
      },
      {
        title: "MaalOS Digital",
        copy: "Internet and mobile banking for retail and corporate customers — web, mobile, mobile money.",
      },
      {
        title: "MaalOS Agency",
        copy: "Agent and branchless banking for networks that reach past the branch: agents, float, field ops.",
      },
      {
        title: "MaalOS Comply",
        copy: "KYC, AML/CFT screening and central-bank reporting, with the audit trail already in the grain.",
      },
    ],
  },
  {
    slug: "fetchflat",
    name: "Fetchflat",
    kicker: "Fetch + extract API",
    tagline: "URL in. HTML, markdown, or JSON out.",
    summary:
      "A fetch and extract API with flat credits — no 75× multipliers. Batch a thousand URLs and get a webhook back.",
    body: [
      "Most scraping APIs hide the real cost in JS-render multipliers. Fetchflat prices the job in the open: static fetch is one credit, JS render is eight, a residential proxy is twenty-five. Extract adds four.",
      "Three calls cover the work. Fetch a URL and get main-content HTML or markdown. Extract into a JSON schema you supply — invalid output is an error, not a guess. Batch one to a thousand items and POST each result to your webhook, with retries.",
    ],
    status: "live",
    href: "https://fetchflat.dev",
    hrefLabel: "Open fetchflat.dev",
    image: "/images/fetchflat-studio.jpg",
    gallery: [
      "/images/fetchflat-studio.jpg",
      "/images/fetchflat-desk.jpg",
      "/images/ops-room.jpg",
    ],
    accent: "API",
    modules: [
      {
        title: "Fetch",
        copy: "POST /v1/fetch. HTML or markdown. Scripts, styles, nav and footer stripped. Main content preferred.",
      },
      {
        title: "Extract",
        copy: "POST /v1/extract. Fetch, then a model fills your JSON schema. Invalid output fails the request.",
      },
      {
        title: "Batch + webhook",
        copy: "POST /v1/batch. One to a thousand URLs, one job id, one POST per item to your endpoint. Three retries.",
      },
      {
        title: "Flat credits",
        copy: "Static 1 · JS render 8 · residential 25. Trial is a thousand credits. Starter is $29 for 30k a month.",
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
