import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { products, statusLabel } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [{ title: "Products — SEETO" }],
  }),
});

function ProductsIndex() {
  return (
    <main className="bg-bg pt-28 pb-24 text-fg sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            Products
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl">
            What we build, <span className="italic">and run.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Seeto is the parent for every product we ship — hospitality,
            Islamic banking, housing, live marketplaces, talent, and the
            systems underneath.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group grid overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow] duration-250 hover:shadow-[var(--shadow-border-hover)] lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:col-span-5 lg:aspect-auto lg:min-h-[280px]">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 px-5 py-6 sm:px-8 lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
                        {product.kicker}
                      </p>
                      <span className="rounded-full bg-fg/6 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-primary uppercase">
                        {statusLabel[product.status]}
                      </span>
                    </div>
                    <h2 className="mt-3 text-3xl font-medium">{product.name}</h2>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                      {product.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-fg">
                    View product
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
