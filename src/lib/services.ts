import { Globe2, Truck, Building2, Wallet, Plane, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ems-international",
    title: "EMS International",
    short: "Collecte et distribution de courrier vers plus de 200 pays.",
    long: "Notre service phare pour vos envois mondiaux : documents, colis, marchandises sont acheminés rapidement et en toute sécurité grâce à notre réseau de partenaires postaux internationaux. Suivi en temps réel de bout en bout.",
    icon: Globe2,
  },
  {
    slug: "ems-national",
    title: "EMS National",
    short: "Acheminement rapide et fiable partout au Sénégal.",
    long: "Nous livrons lettres, documents et colis dans toutes les régions du Sénégal grâce à un maillage logistique dense. Délais maîtrisés, traçabilité complète et large couverture territoriale.",
    icon: Truck,
  },
  {
    slug: "postexpress",
    title: "Postexpress",
    short: "Service urbain de collecte et distribution à Dakar.",
    long: "Notre service Postexpress est dédié à Dakar et sa banlieue pour vos envois urgents. Collecte à domicile ou en bureau, livraison en quelques heures, idéal pour les entreprises.",
    icon: Building2,
  },
  {
    slug: "port-du",
    title: "Port Dû",
    short: "Réglez les frais de transport et douane à l'arrivée.",
    long: "Avec le service Port Dû, le destinataire règle les frais à la réception. Une solution flexible pour vos opérations commerciales internationales et l'import de marchandises.",
    icon: Wallet,
  },
  {
    slug: "fret-transit",
    title: "Fret & Transit",
    short: "Dédouanement et opérations import-export aérien & maritime.",
    long: "Une assistance complète pour vos opérations de fret aérien et maritime : dédouanement, transit, manutention, suivi documentaire. Nos experts vous accompagnent à chaque étape.",
    icon: Plane,
  },
  {
    slug: "courrier-hybride",
    title: "Courrier Hybride",
    short: "Mise sous pli haute capacité : 12 000 enveloppes/heure.",
    long: "Solution industrielle de mise sous pli pour vos communications de masse : factures, relevés, campagnes marketing. Capacité de 12 000 enveloppes par heure, qualité garantie.",
    icon: Mail,
  },
];