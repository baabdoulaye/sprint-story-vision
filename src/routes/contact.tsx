import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/site/VideoSection";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — UNLEASHED" },
      { name: "description", content: "Contactez la rédaction d'UNLEASHED." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <Kicker>Nous écrire</Kicker>
      <h1 className="mt-3 text-4xl uppercase leading-none md:text-6xl">Contact</h1>
      <p className="mt-4 text-lg text-foreground/80">
        Une question, un sujet, une information ? La rédaction d'UNLEASHED vous répond.
      </p>

      {sent ? (
        <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-2xl font-bold uppercase text-primary">Message envoyé</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Merci {form.name || "à vous"}. Votre message a bien été transmis à la rédaction. Nous vous répondrons à l'adresse {form.email} dans les meilleurs délais.
          </p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
            className="mt-6 rounded-full border border-border px-6 py-2 text-sm font-semibold uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-10 space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Nom complet</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="vous@exemple.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Votre message…"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3.5 font-bold uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Envoyer le message
          </button>
        </form>
      )}

      <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
        <p className="font-bold uppercase tracking-wider text-foreground">Rédaction</p>
        <p className="mt-2">redaction@unleashed.media</p>
        <p className="mt-4 font-bold uppercase tracking-wider text-foreground">Partenariats</p>
        <p className="mt-2">partenariats@unleashed.media</p>
      </div>
    </main>
  );
}
