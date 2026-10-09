import { createFileRoute } from "@tanstack/react-router";
import { videoSections } from "@/data/mockData";
import { Kicker, VideoSection } from "@/components/site/VideoSection";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vidéos & Analyses — UNLEASHED" },
      { name: "description", content: "Immersion vidéo : départ, biomécanique, photo-finish et entraînement du sprint." },
      { property: "og:title", content: "Vidéos & Analyses — UNLEASHED" },
      { property: "og:description", content: "Immersion vidéo au cœur du sprint." },
    ],
  }),
  component: () => (
    <main>
      {Object.values(videoSections).map((s, i) => (
        <VideoSection key={s.id} src={s.bgVideoUrl} poster={s.poster} className={i === 0 ? "min-h-[80vh]" : "min-h-[60vh]"}>
          <Kicker>{s.kicker}</Kicker>
          <h2 className="mt-3 max-w-4xl text-5xl uppercase leading-none md:text-7xl">{s.title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{s.text}</p>
        </VideoSection>
      ))}
    </main>
  ),
});
