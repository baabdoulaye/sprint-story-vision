import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/data/mockData";
import { ListingPage } from "@/components/site/Cards";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Culture & Spikes — Burst Track Media" },
      { name: "description", content: "Pointes, mental, rituels : la culture du sprint." },
      { property: "og:title", content: "Culture & Spikes — Burst Track Media" },
      { property: "og:description", content: "Pointes, mental, rituels : la culture du sprint." },
    ],
  }),
  component: () => (
    <ListingPage kicker="Lifestyle" title="Culture & Spikes" intro="Ce qui se passe autour de la piste : matériel, mental et légendes." items={articles.filter((a) => a.category === "Culture" || a.category === "Matériel & Pointes")} />
  ),
});
