import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, Globe2, ShieldCheck, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/courrier.png";
import laposteLogo from "@/assets/partners/laposte.png";
import postefinancesLogo from "@/assets/partners/postefinances.jpg";
import { services } from "@/lib/services";
import { news } from "@/lib/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMS Sénégal — Courrier express, logistique & transport" },
      {
        name: "description",
        content:
          "EMS Sénégal : leader du courrier express et de la logistique. Envois nationaux et internationaux dans plus de 200 pays.",
      },
      { property: "og:title", content: "EMS Sénégal — Courrier express & logistique" },
      {
        property: "og:description",
        content:
          "Suivez vos colis et découvrez nos services : EMS International, National, Postexpress, Fret & Transit.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <Hero />
      <TrackingSection />
      <AboutSnippet />
      <ServicesGrid />
      <Stats />
      <NewsSection />
      <Partners />
      <CTASection />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-70">
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Depuis 1998 · Sénégal
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Votre partenaire logistique <span className="text-primary">de confiance</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            EMS Sénégal achemine vos courriers, colis et marchandises avec rapidité, sécurité et
            traçabilité, partout au Sénégal et dans plus de 200 pays.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#suivi">
                Suivre un colis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackingSection() {
  const [code, setCode] = useState("");
  return (
    <section id="suivi" className="relative -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card className="border-0 shadow-[var(--shadow-elegant)]">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-secondary">
                  Suivre un colis
                </label>
                <p className="mb-3 text-xs text-muted-foreground">
                  Entrez votre numéro de suivi EMS (13 caractères)
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="EE123456789SN"
                    maxLength={13}
                    className="pl-9 uppercase"
                  />
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                onClick={() => {
                  if (code) window.open(`https://ems.sn/?track=${encodeURIComponent(code)}`, "_blank");
                }}
              >
                Suivre
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            EMS Sénégal
          </span>
          <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
            Leader du courrier express au Sénégal
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Société anonyme au capital de 125.000.000 FCFA, EMS Sénégal évolue constamment pour
            offrir des produits adaptés aux besoins de ses clients, garantissant rapidité, fiabilité
            et sécurité à chaque envoi.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Une couverture nationale et internationale dans plus de 200 pays",
              "Des solutions sur mesure pour entreprises et particuliers",
              "Une équipe dévouée et une fiabilité éprouvée",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/80">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/a-propos">En savoir plus sur EMS</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Globe2, label: "200+", sub: "Pays desservis" },
            { icon: Clock, label: "24/7", sub: "Suivi en ligne" },
            { icon: Users, label: "1M+", sub: "Clients servis" },
            { icon: ShieldCheck, label: "100%", sub: "Sécurisé" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <Icon className="mx-auto h-8 w-8 text-primary" />
              <div className="mt-3 text-3xl font-bold text-secondary">{label}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nos Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
            Des solutions logistiques complètes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Du courrier express national aux opérations de fret international, nous couvrons
            l'ensemble de vos besoins logistiques.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, short, icon: Icon }) => (
            <Card
              key={slug}
              className="group border-border transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{short}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/services">Voir tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "200+", label: "Pays desservis" },
    { value: "25+", label: "Années d'expérience" },
    { value: "12 000", label: "Enveloppes/heure" },
    { value: "14", label: "Régions couvertes" },
  ];
  return (
    <section className="bg-secondary py-16 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold text-primary sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-secondary-foreground/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Actualités
          </span>
          <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
            Les dernières nouvelles
          </h2>
        </div>
        <Link to="/actualites" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
          Toutes les actualités →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {news.map((n) => (
          <Card key={n.id} className="overflow-hidden border-border transition-all hover:shadow-[var(--shadow-card)]">
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={n.image}
                alt={n.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="p-5">
              <div className="text-xs text-muted-foreground">{n.date} · {n.author}</div>
              <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-secondary">{n.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    { name: "La Poste Sénégal", logo: laposteLogo },
    { name: "Postefinances", logo: postefinancesLogo },
  ];

  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-border bg-muted/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Nos partenaires
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <Card
                key={`${p.name}-${i}`}
                className="flex h-32 w-64 shrink-0 items-center justify-center border-border bg-background p-6 shadow-sm"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="overflow-hidden rounded-3xl px-8 py-14 text-center text-white sm:px-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
          Prêt à expédier en toute sérénité ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Contactez nos équipes pour une solution sur mesure adaptée à vos besoins.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Nous contacter</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link to="/services">Voir nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
