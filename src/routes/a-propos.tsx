import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Globe2, HeartHandshake, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — EMS Sénégal" },
      { name: "description", content: "Découvrez EMS Sénégal : société anonyme au capital de 125.000.000 FCFA, leader du courrier express et de la logistique." },
      { property: "og:title", content: "À propos d'EMS Sénégal" },
      { property: "og:description", content: "Notre mission, nos valeurs et notre engagement pour une logistique fiable au Sénégal." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Fiabilité", text: "Des engagements tenus, des délais respectés, à chaque envoi." },
  { icon: HeartHandshake, title: "Proximité", text: "Une équipe dévouée à l'écoute de chaque client, particulier ou entreprise." },
  { icon: Globe2, title: "Couverture mondiale", text: "Plus de 200 pays accessibles via notre réseau international." },
  { icon: Award, title: "Excellence", text: "Une qualité de service constamment améliorée pour vous satisfaire." },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            À propos
          </span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">EMS Sénégal</h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            Leader du courrier express, de la messagerie et des services logistiques au Sénégal,
            au service des particuliers et des entreprises depuis plus de 25 ans.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-secondary">Notre mission</h2>
          <p className="mt-4 text-muted-foreground">
            EMS Sénégal est une société anonyme au capital de <strong>125.000.000 FCFA</strong>.
            Nous évoluons constamment pour offrir des produits adaptés aux besoins de nos clients,
            garantissant rapidité, fiabilité et sécurité.
          </p>
          <p className="mt-3 text-muted-foreground">
            Grâce à notre expertise, notre maillage national et notre appartenance au réseau
            postal mondial, nous accompagnons aussi bien les particuliers que les entreprises
            dans leurs envois quotidiens et leurs opérations logistiques stratégiques.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-muted/40 p-8">
          <h3 className="text-lg font-semibold text-secondary">Chiffres clés</h3>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            <div><dt className="text-3xl font-bold text-primary">200+</dt><dd className="text-sm text-muted-foreground">Pays desservis</dd></div>
            <div><dt className="text-3xl font-bold text-primary">25+</dt><dd className="text-sm text-muted-foreground">Ans d'expérience</dd></div>
            <div><dt className="text-3xl font-bold text-primary">125M</dt><dd className="text-sm text-muted-foreground">FCFA de capital</dd></div>
            <div><dt className="text-3xl font-bold text-primary">14</dt><dd className="text-sm text-muted-foreground">Régions du Sénégal</dd></div>
          </dl>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-secondary">Nos valeurs</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <Icon className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Travaillons ensemble</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}