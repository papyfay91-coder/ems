import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos Services — EMS Sénégal" },
      { name: "description", content: "EMS International, National, Postexpress, Fret & Transit, Port Dû, Courrier Hybride : découvrez tous nos services logistiques." },
      { property: "og:title", content: "Services logistiques — EMS Sénégal" },
      { property: "og:description", content: "Solutions complètes de courrier express, fret et messagerie au Sénégal et à l'international." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nos Services
          </span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Des solutions logistiques complètes
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            Du courrier express national aux opérations de fret international, EMS Sénégal couvre
            l'ensemble de vos besoins logistiques avec un seul partenaire de confiance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ slug, title, long, icon: Icon }) => (
            <Card key={slug} className="border-border transition-all hover:shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-secondary">{title}</h2>
                <p className="mt-3 text-muted-foreground">{long}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary">Prêt à expédier votre courrier ?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Confiez vos plis et colis à EMS Sénégal : livraison rapide, suivi en temps réel et couverture dans plus de 200 pays.
          </p>
          <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Envoyer un courrier</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}