import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/data/mockData";
import { ListingPage } from "@/components/site/Cards";

export const Route = createFileRoute("/a-la-une")({
  head: () => ({
    meta: [
      { title: "À la Une — UNLEASHED" },
      { name: "description", content: "Les dernières enquêtes et actualités du sprint mondial." },
      { property: "og:title", content: "À la Une — UNLEASHED" },
      { property: "og:description", content: "Les dernières enquêtes et actualités du sprint mondial." },
    ],
  }),
  component: () => <ListingPage kicker="Dernières heures" title="À la Une" intro="Toutes les histoires qui font vibrer la piste, du départ à la ligne." items={articles} />,
});
