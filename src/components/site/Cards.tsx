import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { relativeTime, type Article } from "@/data/mockData";

export function CategoryBadge({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "track" }) {
  const cls = tone === "track" ? "bg-track text-track-foreground" : "bg-primary text-primary-foreground";
  return <span className={`inline-block rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${cls}`}>{children}</span>;
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={featured ? "md:col-span-2 md:row-span-2" : ""}>
      <Link to="/article/$slug" params={{ slug: article.slug }} className="group relative block h-full overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 hover:scale-[1.02]">
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
