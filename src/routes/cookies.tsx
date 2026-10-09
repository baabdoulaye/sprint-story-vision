import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/site/VideoSection";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Gestion des cookies — UNLEASHED" },
      { name: "description", content: "Information et gestion des cookies sur le site UNLEASHED." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Kicker>Informations légales</Kicker>
      <h1 className="mt-3 text-4xl uppercase leading-none md:text-6xl">Gestion des cookies</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">
            Qu'est-ce qu'un cookie ?
          </h2>
          <p className="mt-3">
            Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un
            site web. Il permet au site de mémoriser certaines informations relatives à votre
            navigation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">
            Cookies utilisés sur UNLEASHED
          </h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[500px] text-left">
              <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="p-3">Cookie</th>
                  <th className="p-3">Finalité</th>
                  <th className="p-3">Durée</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-border">
                  <td className="p-3 font-semibold">session_id</td>
                  <td className="p-3 text-muted-foreground">Maintien de la session utilisateur</td>
                  <td className="p-3 text-muted-foreground">Session</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-semibold">theme_pref</td>
                  <td className="p-3 text-muted-foreground">
                    Mémorisation du thème (sombre/clair)
                  </td>
                  <td className="p-3 text-muted-foreground">1 an</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-semibold">analytics_id</td>
                  <td className="p-3 text-muted-foreground">
                    Statistiques de fréquentation anonymisées
                  </td>
                  <td className="p-3 text-muted-foreground">13 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">
            Gestion de vos préférences
          </h2>
          <p className="mt-3">
            Vous pouvez à tout moment configurer votre navigateur pour accepter, refuser ou
            supprimer les cookies. Voici les liens vers les pages d'aide des principaux navigateurs
            :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Google Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
            <li>Mozilla Firefox : Préférences &gt; Vie privée &gt; Cookies</li>
            <li>Safari : Préférences &gt; Confidentialité &gt; Cookies</li>
            <li>Microsoft Edge : Paramètres &gt; Cookies et autorisations de site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal uppercase text-foreground">Conséquences du refus</h2>
          <p className="mt-3">
            Le refus des cookies fonctionnels peut altérer certaines fonctionnalités du site. Les
            cookies de mesure d'audience étant anonymisés, leur refus n'impacte pas votre expérience
            de lecture.
          </p>
        </section>
      </div>
    </main>
  );
}
