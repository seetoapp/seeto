import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { productBySlug, products, statusLabel } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.product.name} — SEETO`
          : "Product — SEETO",
      },
    ],
  }),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <main className="bg-bg pt-24 text-fg">
      <section className="relative min-h-[70svh] overflow-hidden">
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="scrim-page absolute inset-0" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 pb-12 sm:px-8">
          <Link
            to="/products"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Products
          </Link>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">
            {product.kicker} · {statusLabel[product.status]}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{product.tagline}</p>
          {product.href && (
            <div className="mt-8">
              <Button asChild>
                <a href={product.href} target="_blank" rel="noreferrer">
                  {product.hrefLabel ?? "Open product"}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {product.body.map((para) => (
            <p
              key={para}
              className="mt-5 text-base leading-relaxed text-muted first:mt-0 sm:text-lg"
            >
              {para}
            </p>
          ))}
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
              Status
            </p>
            <p className="mt-2 text-lg">{statusLabel[product.status]}</p>
            <p className="mt-6 text-[11px] tracking-[0.22em] text-subtle uppercase">
              Line
            </p>
            <p className="mt-2">{product.accent}</p>
            <Button asChild className="mt-8 w-full" variant="outline">
              <Link to="/contact">Talk about {product.name}</Link>
            </Button>
          </div>
        </aside>
      </section>

      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl italic sm:text-4xl">
            Inside the product
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
            {product.modules.map((mod, i) => (
              <Reveal key={mod.title} delay={i * 0.04}>
                <article className="h-full bg-elevated p-7">
                  <p className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-medium">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {mod.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {product.gallery.length > 1 && (
        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:px-8 md:grid-cols-2">
          {product.gallery.slice(1).map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]"
            >
              <img
                src={src}
                alt=""
                className="aspect-[16/10] w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </section>
      )}

      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
            Also from Seeto
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="rounded-lg bg-surface px-5 py-5 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="text-[11px] tracking-[0.18em] text-subtle uppercase">
                  {p.kicker}
                </p>
                <p className="mt-2 text-lg">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
