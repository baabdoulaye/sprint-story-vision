import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/site/VideoSection";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — UNLEASHED" },
      {
        name: "description",
        content: "Politique de confidentialité et protection des données personnelles.",
      },
    ],
  }),
  component: PrivacyPage,
});
function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Kicker>Informations légales</Kicker>
      <h1 className="mt-3 text-4xl uppercase leading-none md:text-6xl">
        Politique de confidentialité
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Préambule</h2>
          <p className="mt-3">
            UNLEASHED s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs
            données personnelles conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Données collectées</h2>
          <p className="mt-3">Nous collectons les données suivantes :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Adresse e-mail : lors de l'inscription à la newsletter.</li>
            <li>Données de navigation : via cookies (voir notre page Gestion des cookies).</li>
            <li>
              Messages : nom et e-mail lors de l'envoi d'un message via le formulaire de contact.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Finalités du traitement</h2>
          <p className="mt-3">
            Les données sont utilisées pour : l'envoi de la newsletter, la réponse aux demandes de
            contact, l'amélioration du contenu et de l'expérience utilisateur, et des statistiques
            de fréquentation anonymisées.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Base légale</h2>
          <p className="mt-3">
            Le traitement de vos données repose sur votre consentement (newsletter, cookies) ou sur
            notre intérêt légitime à répondre à vos messages et à améliorer notre service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Durée de conservation</h2>
          <p className="mt-3">
            Vos données sont conservées pour une durée maximale de 3 ans après votre dernière
            interaction, sauf demande de suppression de votre part.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Vos droits</h2>
          <p className="mt-3">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Droit d'accès à vos données personnelles.</li>
            <li>Droit de rectification des données inexactes.</li>
            <li>Droit à l'effacement (« droit à l'oubli »).</li>
            <li>Droit à la limitation du traitement.</li>
            <li>Droit à la portabilité de vos données.</li>
            <li>Droit d'opposition au traitement.</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous via la page Contact. Vous pouvez également
            déposer une réclamation auprès de la CNIL (www.cnil.fr).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Sécurité</h2>
          <p className="mt-3">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre l'accès non autorisé, la perte ou la divulgation.
          </p>
        </section>
      </div>
    </main>
  );
}
