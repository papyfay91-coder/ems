import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EMS Sénégal — Courrier express, logistique & transport" },
      { name: "description", content: "EMS Sénégal, leader du courrier express et de la logistique. Envois nationaux et internationaux dans plus de 200 pays." },
      { name: "author", content: "EMS Sénégal" },
      { property: "og:title", content: "EMS Sénégal — Courrier express, logistique & transport" },
      { property: "og:description", content: "EMS Sénégal, leader du courrier express et de la logistique. Envois nationaux et internationaux dans plus de 200 pays." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@EMSSenegal" },
      { name: "twitter:title", content: "EMS Sénégal — Courrier express, logistique & transport" },
      { name: "twitter:description", content: "EMS Sénégal, leader du courrier express et de la logistique. Envois nationaux et internationaux dans plus de 200 pays." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ivyxsYKf5uMjHwLKsA8rl6QowTj1/social-images/social-1777994212757-LOGOEMS_preview_rev_1.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ivyxsYKf5uMjHwLKsA8rl6QowTj1/social-images/social-1777994212757-LOGOEMS_preview_rev_1.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
