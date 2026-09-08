import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { BootGate } from "@/components/boot-gate";
import { JsonLd } from "@/components/json-ld";
import { NotFound } from "@/components/not-found";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import appCss from "../styles.css?url";

const APP_NAME = "SEETO";
const DESCRIPTION =
  "SEETO COMMUNICATION LIMITED — a Nairobi technology company building live products for hospitality, marketplaces and high-concurrency systems.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#07080a" },
      {
        name: "robots",
        content:
          "noindex, nofollow, noarchive, nosnippet, noimageindex, nocache",
      },
      {
        name: "googlebot",
        content: "noindex, nofollow, noarchive, nosnippet, noimageindex",
      },
      {
        name: "bingbot",
        content: "noindex, nofollow, noarchive, nosnippet, noimageindex",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
        <JsonLd />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <div className="grain" aria-hidden="true" />
          <BootGate>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
          </BootGate>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
