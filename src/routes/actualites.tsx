import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { news } from "@/lib/news";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — EMS Sénégal" },
      { name: "description", content: "Suivez les dernières actualités, nouveautés et annonces d'EMS Sénégal." },
      { property: "og:title", content: "Actualités EMS Sénégal" },
      { property: "og:description", content: "Les dernières nouvelles et services innovants d'EMS Sénégal." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Actualités</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Les dernières nouvelles</h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            Restez informé de nos nouveaux services, partenariats et événements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Card key={n.id} className="overflow-hidden border-border transition-all hover:shadow-[var(--shadow-card)]">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardContent className="p-6">
                <div className="text-xs text-muted-foreground">{n.date} · {n.author}</div>
                <h2 className="mt-2 text-xl font-semibold text-secondary">{n.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}