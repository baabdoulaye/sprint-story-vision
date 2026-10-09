import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Play, X } from "lucide-react";
import { useState } from "react";
import { videoAnalyses, videoSections, type VideoAnalysis } from "@/data/mockData";
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
  component: VideosPage,
});

function VideoCard({ va, onOpen }: { va: VideoAnalysis; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={va.thumbnail}
          alt={va.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-foreground/60 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary">
            <Play className="h-6 w-6 translate-x-0.5 fill-current text-foreground transition-colors group-hover:text-primary-foreground" />
          </div>
        </div>
        <span className="absolute right-3 top-3 rounded bg-background/70 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-foreground backdrop-blur-sm">
          {va.badge}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-background/70 px-2 py-0.5 text-xs text-foreground backdrop-blur-sm">
          <Clock className="h-3 w-3" /> {va.duration}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{va.kicker}</p>
        <h3 className="mt-2 text-xl uppercase leading-tight transition-colors group-hover:text-primary">{va.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{va.description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Lire l'analyse <Play className="h-3 w-3 fill-current" />
        </span>
      </div>
    </button>
  );
}

function VideoLightbox({ va, onClose }: { va: VideoAnalysis; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card"
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <video
            src={va.videoUrl}
            poster={va.thumbnail}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{va.kicker}</p>
          <h2 className="mt-2 text-3xl uppercase leading-tight md:text-4xl">{va.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{va.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {va.stats.map((s) => (
              <div key={s.label} className="bg-card p-4">
                <p className="font-display text-3xl text-primary">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">Analyse technique détaillée</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{va.detailedAnalysis}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function VideosPage() {
  const [selected, setSelected] = useState<VideoAnalysis | null>(null);
  const sections = Object.values(videoSections);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <Kicker>Vidéos & Analyses</Kicker>
        <h1 className="mt-3 text-5xl uppercase leading-none md:text-7xl">Décryptage en mouvement</h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          Ralenti 240fps, photo-finish, laboratoire matériel et immersion mentale : chaque vidéo est une analyse technique complète.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videoAnalyses.map((va) => (
            <VideoCard key={va.id} va={va} onOpen={() => setSelected(va)} />
          ))}
        </div>
      </section>

      {sections.map((s, i) => (
        <VideoSection key={s.id} src={s.bgVideoUrl} poster={s.poster} className={i === 0 ? "min-h-[60vh]" : "min-h-[50vh]"}>
          <Kicker>{s.kicker}</Kicker>
          <h2 className="mt-3 max-w-4xl text-4xl uppercase leading-none md:text-6xl">{s.title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{s.text}</p>
        </VideoSection>
      ))}

      <AnimatePresence>
        {selected && <VideoLightbox va={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}
