import { Link } from "@tanstack/react-router";
import { Logo, Mark } from "@/components/logo";
import { addressLine, company, postalLine } from "@/lib/company";
import { products } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg text-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            A Nairobi technology company. We design, ship and operate live
            products for hospitality, Islamic banking, housing and
            high-concurrency systems.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="hover:text-primary"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/company" className="hover:text-primary">
                  Registry & DUNS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-primary">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
              Nairobi
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {addressLine}
              <br />
              {postalLine}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-[11px] tracking-wide text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center gap-2">
            <Mark className="size-3.5 text-primary" />
            {company.legalName} · {company.companyNumber}
          </p>
          <p>D-U-N-S {company.duns} · Est. {company.registered}</p>
        </div>
      </div>
    </footer>
  );
}
