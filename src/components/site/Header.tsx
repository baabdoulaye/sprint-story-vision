import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { articles, tickerItems } from "@/data/mockData";

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
    <div className="overflow-hidden border-b border-border/40 bg-track text-track-foreground">
      <div className="flex w-max animate-marquee gap-0 py-1 text-[11px] font-semibold uppercase tracking-wider">
        {items.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap after:px-6 after:content-['|'] after:text-track-foreground/30"
          >
            {t}
          </span>
        ))}
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
    return articles
      .filter((a) => (a.title + a.excerpt + a.tags.join(" ")).toLowerCase().includes(s))
      .slice(0, 5);
  }, [q]);
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher un chrono, un article…"
        className="w-full rounded-full border border-input bg-secondary py-2 pl-9 pr-4 text-sm outline-none focus:border-primary lg:w-64"
      />
      {results.length > 0 && (
        <div className="absolute right-0 top-12 z-50 w-full min-w-80 overflow-hidden rounded-lg border border-border bg-popover shadow-xl">
          {results.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setQ("");
                onDone?.();
                navigate({ to: "/article/$slug", params: { slug: a.slug } });
              }}
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

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group flex items-baseline gap-0.5 font-display uppercase leading-none ${className}`}
    >
      <span className="text-2xl font-normal tracking-tight transition-colors group-hover:text-primary md:text-3xl">
        UNLEASHED
      </span>
      <span className="text-xl text-primary transition-transform group-hover:scale-125 md:text-2xl">
        /
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary";
  const active = { className: "!text-primary" };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={linkCls}
              activeProps={active}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <SearchBox />
        </div>
        <button className="xl:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border xl:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              <SearchBox onDone={() => setOpen(false)} />
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl uppercase"
                  activeProps={active}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const footerNavCol2 = [
  { to: "/", label: "Accueil" },
  { to: "/a-la-une", label: "À la Une" },
  { to: "/science", label: "Biomécanique" },
  { to: "/culture", label: "Pointes & Spikes" },
  { to: "/videos", label: "Analyses Vidéos" },
];

const footerLegalCol3 = [
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { to: "/cookies", label: "Gestion des cookies" },
  { to: "/contact", label: "Contact" },
];

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.7l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2.1-3.8h-3v12.3a2.7 2.7 0 1 1-2-2.6V8.4a5.6 5.6 0 1 0 5 5.5V8.8a8.5 8.5 0 0 0 5.5 2V7.6c-.1 0-.1 0 0-.9z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://youtube.com", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://twitter.com", label: "X", Icon: XIcon },
  { href: "https://tiktok.com", label: "TikTok", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Le média 100% sprint. Dédié à la culture du sprint court et de la vitesse pure : 60m,
              100m, 200m, 400m et relais. Chronos, biomécanique, matériel et mental — tout ce qui
              sépare une finale d'un record.
            </p>
            <p className="mt-auto text-xs text-muted-foreground/60">
              © 2026 UNLEASHED. Tous droits réservés.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Rubriques
            </h4>
            <ul className="flex flex-col gap-3">
              {footerNavCol2.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as any}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Informations légales
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLegalCol3.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as any}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Communauté
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">@unleashed_sprint</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
