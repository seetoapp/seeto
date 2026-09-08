import type { Product } from "@/lib/products";

export type VolunteerProject = Product;

export const projects: VolunteerProject[] = [
  {
    slug: "turaath",
    name: "Turaath",
    kicker: "Somali scholarly heritage",
    tagline: "Lectures, fatwas, and the scholars — in one place.",
    summary:
      "A living archive of Somali ʿulamāʾ. Turaath keeps the lectures, fatwas and teaching of Somali scholars where the community can actually open them.",
    body: [
      "Somali religious heritage still lives in rooms, cassettes and memory. Turaath is the modern bridge: a platform that preserves that corpus and puts it in the hands of the people it was taught for.",
      "The work is volunteer. Seeto builds and operates the system so scholars can teach, and so a student in Nairobi or Mogadishu can find a lecture, a fatwa, or a teacher without asking around on WhatsApp.",
    ],
    status: "live",
    href: "https://turaath.so",
    hrefLabel: "Open turaath.so",
    image: "/images/turaath-study.jpg",
    gallery: ["/images/turaath-study.jpg", "/images/turaath-circle.jpg"],
    accent: "Heritage",
    modules: [
      {
        title: "Digital preservation",
        copy: "Kaydinta dhijitaalka ah — the lectures and writings of Somali scholars, kept before they disappear.",
      },
      {
        title: "Lectures & fatwas",
        copy: "Muxaadarooyin and fataawo in one feed, searchable, on a phone.",
      },
      {
        title: "Scholars to community",
        copy: "A bridge between the ʿulamāʾ and the Somali public — not another closed group chat.",
      },
      {
        title: "Mobile first",
        copy: "Sign in with Google or Apple. Download Turath and start the search for knowledge.",
      },
    ],
  },
  {
    slug: "thahabi",
    name: "Thahabi",
    kicker: "Digital Islamic library",
    tagline: "More than 29,000 Islamic books, ready to explore.",
    summary:
      "A Shamilah on the open web — tafsīr, ḥadīth, fiqh and the classical corpus, readable in a browser since 2019.",
    body: [
      "Maktabah al-Shamilah is how a generation of students actually read. Thahabi puts that library on the web: more than twenty-nine thousand works, by author and by category, without asking anyone to install a desktop archive.",
      "This is volunteer work Seeto keeps running. The books are the point. The interface stays out of the way.",
    ],
    status: "live",
    href: "https://thahabi.org",
    hrefLabel: "Open thahabi.org",
    image: "/images/thahabi-stacks.jpg",
    gallery: [
      "/images/thahabi-stacks.jpg",
      "/images/thahabi-manuscript.jpg",
    ],
    accent: "Library",
    modules: [
      {
        title: "The corpus",
        copy: "More than 29,000 Islamic books — tafsīr, ḥadīth, fiqh, language and history.",
      },
      {
        title: "Authors & categories",
        copy: "Browse the way a student actually looks: by shaykh, by subject, then read.",
      },
      {
        title: "On the open web",
        copy: "No desktop installer. A browser is enough, on a phone or a desk.",
      },
      {
        title: "Since 2019",
        copy: "A library that has been quietly open for years. We keep the lights on.",
      },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
