import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/data/mockData";
import { ListingPage } from "@/components/site/Cards";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science & Entraînement — UNLEASHED" },
      { name: "description", content: "Biomécanique, physiologie et nutrition du sprinteur d'élite." },
      { property: "og:title", content: "Science & Entraînement — UNLEASHED" },
      { property: "og:description", content: "Biomécanique, physiologie et nutrition du sprinteur d'élite." },
    ],
  }),
  component: () => (
    <ListingPage kicker="Labo" title="Science & Entraînement" intro="Les secrets de la vitesse, mesurés et décryptés." items={articles.filter((a) => a.category === "Science" || a.category === "Biomécanique")} />
  ),
});
