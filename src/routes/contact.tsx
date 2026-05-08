import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EMS Sénégal" },
      { name: "description", content: "Contactez EMS Sénégal : ems@ems.sn, +221 33 869 01 01. Nos équipes sont à votre écoute." },
      { property: "og:title", content: "Contactez EMS Sénégal" },
      { property: "og:description", content: "Une question sur un envoi ou un suivi de colis ? Notre équipe vous répond rapidement." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message envoyé !", {
        description: "Nos équipes vous recontactent dans les plus brefs délais.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  }

  return (
    <div>
      <section className="border-b border-border bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Expédiez en toute confiance</h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            Une question sur un envoi, un suivi de colis ou nos services express ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          {[
            { icon: MapPin, title: "Adresse", value: "Dakar, Sénégal" },
            { icon: Phone, title: "Téléphone", value: "+221 33 869 01 01", href: "tel:+221338690101" },
            { icon: Mail, title: "Email", value: "ems@ems.sn", href: "mailto:ems@ems.sn" },
            { icon: Clock, title: "Horaires", value: "Lun – Ven : 8h – 18h" },
          ].map(({ icon: Icon, title, value, href }) => (
            <Card key={title} className="border-border">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">{title}</div>
                  {href ? (
                    <a href={href} className="text-sm text-muted-foreground hover:text-primary">{value}</a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{value}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border lg:col-span-2">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-secondary">Envoyez-nous un message</h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">Nom complet</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">Email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vous@exemple.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-secondary">Sujet</label>
                <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Objet de votre message" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-secondary">Message</label>
                <Textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre besoin..." />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}