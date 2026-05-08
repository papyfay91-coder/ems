
# Site vitrine EMS Sénégal

Refonte moderne du site ems.sn avec une identité visuelle orange / blanc / bleu foncé, basée sur le contenu existant (services, contacts, actualités).

## Charte visuelle

- **Primaire** : Orange EMS (#F47A20)
- **Secondaire** : Bleu foncé (#0B2A4A)
- **Fond** : Blanc / gris très clair
- Typographie sans-serif moderne, design épuré et professionnel, fortes accroches visuelles, beaucoup d'espaces blancs.

## Structure des pages (routes séparées)

1. **Accueil** (`/`)
   - Hero avec slogan "Votre partenaire logistique de confiance" + CTA (Suivre un colis, Nos services)
   - Bloc de suivi de colis (champ numéro 13 caractères — UI seulement, redirige vers ems.sn pour le tracking réel)
   - Présentation EMS Sénégal (leader courrier express, 200+ pays, capital 125M FCFA)
   - Aperçu des 6 services (cards avec icônes)
   - Chiffres clés (200+ pays, années d'expérience, etc.)
   - Dernières actualités (3 cards)
   - Bandeau partenaires (La Poste, Postefinances, etc.)

2. **Services** (`/services`)
   - Liste détaillée des 6 services avec descriptions enrichies :
     - EMS International
     - EMS National
     - Postexpress (Dakar & banlieue)
     - Port Dû
     - Fret & Transit
     - Courrier Hybride (12 000 enveloppes/heure)

3. **À propos** (`/a-propos`)
   - Histoire, mission, valeurs
   - Société anonyme au capital de 125 000 000 FCFA
   - Couverture nationale & internationale
   - Engagement qualité et fiabilité

4. **Actualités** (`/actualites`)
   - Liste des news (statique pour la vitrine)

5. **Contact** (`/contact`)
   - Formulaire de contact (nom, email, sujet, message)
   - Coordonnées : ems@ems.sn, +221 33 869 01 01
   - Carte / adresse Dakar
   - Horaires

## Composants partagés

- **Header** : logo EMS, nav (Accueil, Services, À propos, Actualités, Contact), bouton orange "Suivre un colis"
- **Footer** : liens rapides, services, contact, réseaux sociaux, mentions
- Responsive mobile/tablette/desktop
- Animations subtiles au scroll

## Détails techniques

- TanStack Start, routes séparées par page (SSR + SEO), métadonnées `head()` propres à chaque route (title, description, og:*) en français.
- Tailwind v4 via `src/styles.css` : variables `--primary` (orange), `--secondary` (bleu foncé) en oklch.
- Composants shadcn déjà disponibles (Button, Card, Input, Form…).
- Le formulaire de suivi et le formulaire contact sont **front-only** dans cette première version (pas de backend). On pourra brancher Lovable Cloud + envoi d'email plus tard si souhaité.
