import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SignalField } from "@/components/signal-field";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-svh overflow-hidden bg-bg text-fg">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        poster="/images/kilimani-dusk.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="scrim-hero absolute inset-0" />
      <SignalField className="opacity-70" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
        <motion.p
          className="flex items-center gap-3 text-[11px] tracking-[0.32em] text-primary uppercase"
          initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pulse-dot inline-block size-1.5 rounded-full bg-primary" />
          Nairobi · Est. 2024
        </motion.p>

        <motion.h1
          className="hero-title mt-5 max-w-4xl"
          initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Built in Nairobi.
          <br />
          <span className="italic text-fg/90">Run in real time.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {company.legalName} designs, ships and operates software products for
          hospitality, live marketplaces and high-concurrency systems — from
          Kilimani to the rest of East Africa.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild size="lg">
            <Link to="/products">
              Explore products
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </motion.div>

        <div className="mt-14 flex items-end justify-between gap-6 border-t border-line pt-6">
          <dl className="grid grid-cols-3 gap-6 text-sm sm:gap-10">
            <div>
              <dt className="text-[11px] tracking-[0.2em] text-subtle uppercase">
                D-U-N-S
              </dt>
              <dd className="mt-1 font-mono text-xs text-fg tabular-nums sm:text-sm">
                {company.duns}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.2em] text-subtle uppercase">
                Company
              </dt>
              <dd className="mt-1 font-mono text-xs text-fg sm:text-sm">
                {company.companyNumber}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.2em] text-subtle uppercase">
                Office
              </dt>
              <dd className="mt-1 text-xs text-fg sm:text-sm">Kilimani, Nairobi</dd>
            </div>
          </dl>
          <a
            href="#products"
            className="hidden items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase sm:flex"
          >
            Scroll
            <ArrowDown className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
