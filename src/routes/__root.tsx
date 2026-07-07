import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>Erreur 404</p>
        <h1 className="text-display-lg">Page introuvable.</h1>
        <p className="mt-4 text-muted-foreground">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn-primary mt-8">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display-md">Cette page n'a pas pu se charger.</h1>
        <p className="mt-4 text-muted-foreground">Un incident est survenu. Vous pouvez réessayer.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Réessayer</button>
          <a href="/" className="btn-ghost">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DigitalVision — Studio digital premium à Lomé" },
      { name: "description", content: "DigitalVision transforme des idées ambitieuses en expériences numériques d'exception : sites web, applications, design UX/UI et branding. Basés à Lomé, Togo." },
      { name: "author", content: "DigitalVision" },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:title", content: "DigitalVision — Studio digital premium" },
      { property: "og:description", content: "Sites web, applications, design UX/UI et branding pensés pour la performance et le prestige." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "DigitalVision" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@DigitalVision" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DigitalVision",
          url: "/",
          description: "Studio digital premium basé à Lomé, Togo. Sites web, applications, UX/UI et branding.",
          address: { "@type": "PostalAddress", addressLocality: "Lomé", addressCountry: "TG" },
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AnimatedOutlet() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
      <ScrollToTop />
    </QueryClientProvider>
  );
}
