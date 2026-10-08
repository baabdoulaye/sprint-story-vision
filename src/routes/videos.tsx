import { createFileRoute } from "@tanstack/react-router";
import { videos } from "@/data/mockData";
import { SectionTitle, VideoGrid } from "@/components/site/Cards";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vidéos & Analyses — Burst Track Media" },
      { name: "description", content: "Ralentis 240fps, finales et analyses vidéo du sprint." },
      { property: "og:title", content: "Vidéos & Analyses — Burst Track Media" },
      { property: "og:description", content: "Ralentis 240fps, finales et analyses vidéo du sprint." },
    ],
  }),
  component: () => (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle kicker="Slow-Mo Zone" title="Vidéos & Analyses" />
      <VideoGrid videos={[...videos, ...videos.map((v) => ({ ...v, id: v.id + "b" }))]} />
    </main>
  ),
});
