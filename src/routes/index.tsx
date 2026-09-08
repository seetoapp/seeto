import { createFileRoute } from "@tanstack/react-router";
import { HomeCta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { CapabilityMarquee } from "@/components/home/marquee";
import { ProductsBand } from "@/components/home/products-band";
import { RaysoStrip } from "@/components/home/rayso-strip";
import { Story } from "@/components/home/story";
import { Trust } from "@/components/home/trust";
import { VolunteerBand } from "@/components/home/volunteer-band";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "SEETO — Built in Nairobi. Run in real time. | SEETO COMMUNICATION LIMITED",
      },
    ],
  }),
});

function Home() {
  return (
    <main>
      <Hero />
      <CapabilityMarquee />
      <ProductsBand />
      <VolunteerBand />
      <Story />
      <RaysoStrip />
      <Trust />
      <HomeCta />
    </main>
  );
}
