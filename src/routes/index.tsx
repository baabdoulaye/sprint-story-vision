import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import { articles, categories, videos } from "@/data/mockData";
import { ArticleCard, CategoryBadge, SectionTitle, VideoGrid } from "@/components/site/Cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burst Track Media — Le média 100% sprint" },
      { name: "description", content: "Actualités, chronos, analyses biomécaniques et vidéos slow-mo du sprint : 60m, 100m, 200m, 400m et relais." },
      { property: "og:title", content: "Burst Track Media — Le média 100% sprint" },
      { property: "og:description", content: "Le média immersif dédié au sprint en athlétisme." },
    ],
  }),
  component: Home,
});

function Hero() {
  const a = articles[0]!;
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden">
      <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <video src={a.videoUrl} autoPlay muted loop playsInline poster={hero} className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-fade" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-sm bg-track px-3 py-1 text-xs font-bold uppercase tracking-widest text-track-foreground glow-track">
            <span className="h-2 w-2 animate-pulse rounded-full bg-track-foreground" /> Flash Info
          </span>
          <h1 className="mt-5 max-w-5xl text-5xl uppercase leading-[0.95] md:text-8xl">{a.title}</h1>
          <p className="mt-5 line-clamp-2 max-w-2xl text-lg text-muted-foreground">{a.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link to="/article/$slug" params={{ slug: a.slug }} className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold uppercase text-primary-foreground transition-all hover:glow-primary">
              Lire l'enquête complète <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-sm text-muted-foreground">Par <b className="text-foreground">{a.author}</b> · <Clock className="inline h-3.5 w-3.5" /> {a.readTime} min</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SplitVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const toggle = () => { const v = ref.current; if (!v) return; if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); } };
  const stats = [
    { label: "Vitesse de pointe", value: "43.9", unit: "km/h" },
    { label: "Fréquence de foulée", value: "4.8", unit: "Hz" },
    { label: "Temps de réaction", value: "0.128", unit: "s" },
  ];
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-5">
      <div className="relative overflow-hidden rounded-xl border border-border lg:col-span-3">
        <video ref={ref} src={articles[2]!.videoUrl} poster={articles[1]!.image} muted={muted} loop playsInline className="aspect-video h-full w-full object-cover" />
        <span className="absolute right-3 top-3"><CategoryBadge>4K</CategoryBadge></span>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-fade p-4">
          <button onClick={toggle} aria-label="Lecture" className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground glow-primary">{playing ? <Pause /> : <Play fill="currentColor" />}</button>
          <button onClick={() => setMuted(!muted)} aria-label="Son" className="grid h-11 w-11 place-items-center rounded-full bg-secondary">{muted ? <VolumeX /> : <Volume2 />}</button>
          <button onClick={() => ref.current?.requestFullscreen()} aria-label="Plein écran" className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-secondary"><Maximize /></button>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:col-span-2">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Analyse technique</p>
        <h2 className="mt-2 text-4xl uppercase leading-none md:text-5xl">La biomécanique des 30 premiers mètres</h2>
        <p className="mt-4 text-muted-foreground">Comment un sprinteur passe de 0 à 40 km/h en moins de 4 secondes : inclinaison du buste, temps de contact au sol, puissance horizontale. Décryptage image par image.</p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-4">
              <p className="font-display text-3xl text-primary text-glow">{s.value}<span className="text-sm">{s.unit}</span></p>
              <p className="mt-1 text-[11px] uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsGrid() {
  const [cat, setCat] = useState<string>("Tous");
  const list = cat === "Tous" ? articles.slice(0, 5) : articles.filter((a) => a.category === cat);
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle kicker="Le fil" title="News & Reportages" />
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`relative rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${cat === c ? "border-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
            {cat === c && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-primary" />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid auto-rows-[minmax(260px,auto)] gap-6 md:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.length === 0 && <p className="text-muted-foreground">Aucun article dans cette catégorie pour le moment.</p>}
          {list.map((a, i) => <ArticleCard key={a.id} article={a} featured={i === 0} />)}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <SplitVideo />
      <NewsGrid />
      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionTitle kicker="Slow-Mo Zone" title="Video Vault" />
        <VideoGrid videos={videos} />
      </section>
    </main>
  );
}
