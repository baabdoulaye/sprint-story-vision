import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, Timer, X, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { articles, disciplines, tickerItems } from "@/data/mockData";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/a-la-une", label: "À la Une" },
  { to: "/videos", label: "Vidéos & Analyses" },
  { to: "/science", label: "Science & Entraînement" },
  { to: "/culture", label: "Culture & Spikes" },
] as const;

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-b border-border bg-track text-track-foreground">
      <div className="flex w-max animate-marquee gap-10 py-1.5 text-xs font-semibold uppercase tracking-wider">
        {items.map((t, i) => <span key={i} className="whitespace-nowrap">{t}</span>)}
      </div>
    </div>
  );
}

function SearchBox({ onDone }: { onDone?: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return articles.filter((a) => (a.title + a.excerpt + a.tags.join(" ")).toLowerCase().includes(s)).slice(0, 5);
  }, [q]);
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher un chrono, un article…"
        className="w-full rounded-full border border-input bg-secondary py-2 pl-9 pr-4 text-sm outline-none focus:border-primary focus:glow-primary lg:w-64"
      />
      {results.length > 0 && (
        <div className="absolute right-0 top-12 z-50 w-full min-w-80 overflow-hidden rounded-lg border border-border bg-popover shadow-xl">
          {results.map((a) => (
            <button
              key={a.id}
              onClick={() => { setQ(""); onDone?.(); navigate({ to: "/article/$slug", params: { slug: a.slug } }); }}
              className="block w-full px-4 py-3 text-left text-sm hover:bg-accent"
            >
              <span className="text-xs font-bold uppercase text-primary">{a.category}</span>
              <p className="line-clamp-1">{a.title}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary";
  const active = { className: "!text-primary" };
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <Ticker />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground glow-primary">
            <Zap className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="font-display text-2xl uppercase italic leading-none">Unleashed<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.slice(0, 2).map((n) => <Link key={n.to} to={n.to} className={linkCls} activeProps={active} activeOptions={{ exact: true }}>{n.label}</Link>)}
          <div className="group relative">
            <button className={linkCls + " flex items-center gap-1"}><Timer className="h-4 w-4" />Discipline</button>
            <div className="invisible absolute left-0 top-full flex gap-1 rounded-lg border border-border bg-popover p-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              {disciplines.map((d) => (
                <Link key={d} to="/discipline/$d" params={{ d }} className="rounded-md px-3 py-1.5 font-display text-lg hover:bg-primary hover:text-primary-foreground">{d}</Link>
              ))}
            </div>
          </div>
          {nav.slice(2).map((n) => <Link key={n.to} to={n.to} className={linkCls} activeProps={active}>{n.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><SearchBox /></div>
        <button className="xl:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border xl:hidden">
            <div className="flex flex-col gap-4 px-4 py-6">
              <SearchBox onDone={() => setOpen(false)} />
              {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-3xl uppercase" activeProps={active} activeOptions={{ exact: true }}>{n.label}</Link>)}
              <div className="flex flex-wrap gap-2">
                {disciplines.map((d) => <Link key={d} to="/discipline/$d" params={{ d }} onClick={() => setOpen(false)} className="rounded-full border border-primary px-4 py-1 font-display text-primary">{d}</Link>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <p className="font-display text-4xl uppercase italic">Unleashed<span className="text-primary">.</span></p>
        <p className="text-sm text-muted-foreground">100% sprint. 60m · 100m · 200m · 400m · 4x100m. © 2026</p>
      </div>
    </footer>
  );
}
