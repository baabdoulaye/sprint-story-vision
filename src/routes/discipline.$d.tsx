import { createFileRoute } from "@tanstack/react-router";
import { articles, type Discipline } from "@/data/mockData";
import { ListingPage } from "@/components/site/Cards";

export const Route = createFileRoute("/discipline/$d")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.d} — Burst Track Media` },
      { name: "description", content: `Actualités, chronos et analyses du ${params.d}.` },
      { property: "og:title", content: `${params.d} — Burst Track Media` },
      { property: "og:description", content: `Actualités, chronos et analyses du ${params.d}.` },
    ],
  }),
  component: DisciplinePage,
});

function DisciplinePage() {
  const { d } = Route.useParams();
  return <ListingPage kicker="Discipline" title={d} intro={`Tout sur le ${d} : records, techniques et prétendants.`} items={articles.filter((a) => a.disciplines.includes(d as Discipline))} />;
}
