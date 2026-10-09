import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/site/VideoSection";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — UNLEASHED" },
      { name: "description", content: "Mentions légales du magazine UNLEASHED." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Kicker>Informations légales</Kicker>
      <h1 className="mt-3 text-4xl uppercase leading-none md:text-6xl">Mentions légales</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            UNLEASHED est un média éditorial indépendant dédié au sprint en athlétisme. Le site est édité par la société UNLEASHED Media, immatriculée sous le numéro SIRET 000 000 000 00000, dont le siège social est situé à Paris, France.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Directeur de la publication</h2>
          <p className="mt-3">
            Le directeur de la publication est le rédacteur en chef d'UNLEASHED Media. Pour toute demande relative au contenu éditorial, contactez-nous via la page Contact.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Hébergement</h2>
          <p className="mt-3">
            Le site est hébergé par des infrastructures cloud sécurisées. Les coordonnées de l'hébergeur sont disponibles sur demande auprès de l'éditeur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des contenus présents sur ce site (articles, vidéos, photographies, graphismes, logos, marques) est la propriété exclusive d'UNLEASHED Media ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite et constitue une contrefaçon.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Responsabilité éditoriale</h2>
          <p className="mt-3">
            Les informations diffusées sur UNLEASHED sont fournies à titre indicatif. Bien que nous nous efforcions d'assurer leur exactitude, aucune garantie ne peut être donnée quant à leur complétude ou leur actualité. Les chronos, records et données sportives sont sourcés auprès des fédérations officielles et des organisateurs de meetings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Liens hypertextes</h2>
          <p className="mt-3">
            Le site peut contenir des liens vers des sites externes. UNLEASHED n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase text-foreground">Droit applicable</h2>
          <p className="mt-3">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </main>
  );
}
