import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Play, X } from "lucide-react";
import { useState } from "react";
import { relativeTime, type Article, type Video } from "@/data/mockData";

export function CategoryBadge({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "track" }) {
  const cls = tone === "track" ? "bg-track text-track-foreground" : "bg-primary text-primary-foreground";
  return <span className={`inline-block rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${cls}`}>{children}</span>;
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={featured ? "md:col-span-2 md:row-span-2" : ""}>
      <Link to="/article/$slug" params={{ slug: article.slug }} className="group relative block h-full overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 hover:scale-[1.02] hover:glow-primary">
        <div className={`relative overflow-hidden ${featured ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-fade" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-2 flex items-center gap-2">
            <CategoryBadge>{article.category}</CategoryBadge>
            <span className="text-xs text-muted-foreground">{relativeTime(article.date)}</span>
          </div>
          <h3 className={`uppercase leading-tight ${featured ? "text-3xl md:text-5xl" : "text-xl"}`}>{article.title}</h3>
          {featured && <p className="mt-3 line-clamp-2 max-w-xl text-sm text-muted-foreground">{article.excerpt}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((t) => <span key={t} className="text-[11px] font-semibold uppercase text-lime">#{t}</span>)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-4 backdrop-blur" onClick={onClose}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} aria-label="Fermer" className="absolute -top-12 right-0 rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground"><X /></button>
            <video src={video.videoUrl} poster={video.thumbnail} controls autoPlay className="aspect-video w-full rounded-xl border border-border bg-card" />
            <h3 className="mt-4 text-2xl uppercase">{video.title}</h3>
            <p className="text-sm text-muted-foreground">{video.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function VideoGrid({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState<Video | null>(null);
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((v) => (
          <button key={v.id} onClick={() => setCurrent(v)} className="group text-left">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border transition-transform duration-300 group-hover:scale-[1.02] group-hover:glow-primary">
              <img src={v.thumbnail} alt={v.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-background/30 opacity-80 transition-opacity group-hover:opacity-100">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground glow-primary"><Play fill="currentColor" /></span>
              </div>
              {v.badge && <span className="absolute left-2 top-2"><CategoryBadge tone="track">{v.badge}</CategoryBadge></span>}
              <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-background/80 px-1.5 py-0.5 text-xs font-bold"><Clock className="h-3 w-3" />{v.duration}</span>
            </div>
            <h4 className="mt-3 font-display text-lg uppercase">{v.title}</h4>
            <p className="text-sm text-muted-foreground">{v.description}</p>
          </button>
        ))}
      </div>
      <VideoModal video={current} onClose={() => setCurrent(null)} />
    </>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-1 text-4xl uppercase md:text-6xl">{title}</h2>
    </div>
  );
}

export function ListingPage({ kicker, title, intro, items }: { kicker: string; title: string; intro: string; items: Article[] }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle kicker={kicker} title={title} />
      <p className="mb-10 max-w-2xl text-muted-foreground">{intro}</p>
      {items.length === 0 ? <p className="text-muted-foreground">Aucun article pour le moment.</p> : (
        <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
          {items.map((a, i) => <ArticleCard key={a.id} article={a} featured={i === 0 && items.length > 2} />)}
        </div>
      )}
    </main>
  );
}
