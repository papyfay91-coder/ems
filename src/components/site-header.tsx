import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import img_fond from "@/assets/LOGOEMS_preview_rev_1.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/actualites", label: "Actualités" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
 <Link to="/" className="flex items-center">
  <img
    src={img_fond}
    alt="logo"
    className="h-9 w-auto object-contain"
  />
</Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-secondary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/" hash="suivi">Suivre un colis</Link>
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="space-y-1 border-t border-border bg-background px-4 py-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-secondary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full bg-primary text-primary-foreground">
            <Link to="/" hash="suivi" onClick={() => setOpen(false)}>Suivre un colis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}