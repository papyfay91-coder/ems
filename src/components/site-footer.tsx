import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Package } from "lucide-react";
import img_fond from "@/assets/LOGOEMS_preview_rev_1.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img
              src={img_fond}
              alt="EMS Sénégal"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-3 text-sm text-secondary-foreground/70">
              Leader du courrier express, de la messagerie et des services logistiques au Sénégal.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-primary">Accueil</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary">Services</Link></li>
              <li><Link to="/a-propos" className="text-secondary-foreground/80 hover:text-primary">À propos</Link></li>
              <li><Link to="/actualites" className="text-secondary-foreground/80 hover:text-primary">Actualités</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>EMS International</li>
              <li>EMS National</li>
              <li>Postexpress</li>
              <li>Port Dû</li>
              <li>Fret &amp; Transit</li>
              <li>Courrier Hybride</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Dakar, Sénégal
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+221338690101" className="hover:text-primary">+221 33 869 01 01</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:ems@ems.sn" className="hover:text-primary">ems@ems.sn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} EMS Sénégal. Tous droits réservés. Société anonyme au capital de 125.000.000 FCFA.
        </div>
      </div>
    </footer>
  );
}