import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { articles, rankings, spikeModels, tickerItems, videoSections as vs } from "@/data/mockData";
import { ArticleCard, CategoryBadge, SectionTitle } from "@/components/site/Cards";
import { Kicker, VideoSection } from "@/components/site/VideoSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNLEASHED — Le magazine du sprint" },
      {
        name: "description",
        content:
          "Enquêtes, chronos, biomécanique et culture du sprint : 60m, 100m, 200m, 400m et relais.",
      },
      { property: "og:title", content: "UNLEASHED — Le magazine du sprint" },
      {
        property: "og:description",
        content: "Le magazine éditorial premium dédié au sprint en athlétisme.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const a = articles[0]!;
  const items = [...tickerItems, ...tickerItems];
  return (
    <VideoSection
      src={vs.hero.bgVideoUrl}
      poster={vs.hero.poster}
      className="min-h-screen items-end"
      animate={false}
    >
      <Kicker>{vs.hero.kicker}</Kicker>
      <h1 className="mt-4 max-w-6xl text-6xl uppercase leading-[0.9] md:text-[9rem]">
        {vs.hero.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-white">{vs.hero.text}</p>
      <Link
        to="/article/$slug"
        params={{ slug: a.slug }}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-bold uppercase text-background transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Lire le dossier{" "}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
      <div className="mt-14 overflow-hidden border-y border-foreground/20">
        <div className="flex w-max animate-marquee gap-0 py-3 font-display text-lg uppercase tracking-wide text-white">
          {items.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap after:px-8 after:content-['|'] after:text-foreground/25"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </VideoSection>
  );
}

function FlashTrack() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionTitle kicker="Flash Track" title="L'actualité du sprint" />
      <div className="grid auto-rows-[minmax(260px,auto)] gap-6 md:grid-cols-4">
        {articles.slice(0, 5).map((a, i) => (
          <ArticleCard key={a.id} article={a} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

function Biomeca() {
  const stats = [
    { v: "40", u: "km/h", l: "Vitesse atteinte à 30m" },
    { v: "4.8", u: "Hz", l: "Fréquence de foulée" },
    { v: "0.128", u: "s", l: "Temps de réaction" },
    { v: "0.09", u: "s", l: "Contact au sol" },
  ];
  return (
    <VideoSection src={vs.biomeca.bgVideoUrl} poster={vs.biomeca.poster} className="min-h-[75vh]">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Kicker>{vs.biomeca.kicker}</Kicker>
          <h2 className="mt-3 text-5xl uppercase leading-none md:text-7xl">{vs.biomeca.title}</h2>
          <p className="mt-6 max-w-lg text-lg text-white">{vs.biomeca.text}</p>
        </div>
        <div className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-lg border border-foreground/15 bg-foreground/15">
          {stats.map((s) => (
            <div key={s.l} className="bg-background/70 p-6 backdrop-blur">
              <p className="font-display text-5xl">
                {s.v}
                <span className="ml-1 text-lg text-primary">{s.u}</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </VideoSection>
  );
}

function Dossiers() {
  const picks = [articles[3]!, articles[4]!, articles[5]!];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionTitle kicker="Dossiers & Enquêtes" title="Grands formats" />
      <div className="grid gap-10 md:grid-cols-3">
        {picks.map((a) => (
          <Link key={a.id} to="/article/$slug" params={{ slug: a.slug }} className="group block">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <CategoryBadge>{a.category}</CategoryBadge>
            </div>
            <h3 className="mt-3 text-2xl uppercase leading-tight transition-colors group-hover:text-primary">
              {a.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-muted-foreground">{a.excerpt}</p>
            <p className="mt-3 text-xs uppercase text-muted-foreground">
              {a.author} · <Clock className="inline h-3 w-3" /> {a.readTime} min
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PhotoFinish() {
  return (
    <VideoSection src={vs.finish.bgVideoUrl} poster={vs.finish.poster} className="min-h-[55vh]">
      <div className="max-w-3xl">
        <Kicker>{vs.finish.kicker}</Kicker>
        <h2 className="mt-3 text-5xl uppercase leading-none md:text-7xl">{vs.finish.title}</h2>
        <p className="mt-6 text-lg text-white">{vs.finish.text}</p>
        <p className="mt-8 font-display text-3xl uppercase">
          Record du monde 100m : <span className="text-primary">9.58</span>
        </p>
      </div>
    </VideoSection>
  );
}

function Rankings() {
  const keys = Object.keys(rankings) as (keyof typeof rankings)[];
  const [d, setD] = useState<keyof typeof rankings>("100m");
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionTitle kicker="Classements" title="Chronos de référence" />
      <div className="mb-6 flex gap-2">
        {keys.map((k) => (
          <button
            key={k}
            onClick={() => setD(k)}
            className={`relative rounded-full border px-5 py-2 font-display text-lg ${d === k ? "border-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {d === k && (
              <motion.span layoutId="rk" className="absolute inset-0 rounded-full bg-foreground" />
            )}
            <span className="relative">{k}</span>
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[600px] text-left">
          <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Athlète</th>
              <th className="p-4">Pays</th>
              <th className="p-4">Temps</th>
              <th className="p-4">Passages</th>
              <th className="p-4">Année</th>
            </tr>
          </thead>
          <tbody>
            {rankings[d].map((r) => (
              <motion.tr
                key={d + r.rank}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t border-border"
              >
                <td className="p-4 font-display text-xl text-muted-foreground">{r.rank}</td>
                <td className="p-4 font-semibold">{r.athlete}</td>
                <td className="p-4 text-muted-foreground">{r.country}</td>
                <td className="p-4 font-display text-2xl text-primary">{r.time}</td>
                <td className="p-4 text-sm text-muted-foreground">{r.splits}</td>
                <td className="p-4 text-muted-foreground">{r.year}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Training() {
  const pillars = [
    {
      t: "Force maximale",
      d: "Squats et tirages lourds, 85–95 % du max, pour élever le plafond de force.",
    },
    {
      t: "Charge d'impact",
      d: "Pliométrie : jusqu'à 5 fois le poids du corps encaissé en moins de 0,1 s.",
    },
    {
      t: "Explosivité",
      d: "Lancers, sauts et départs résistés pour convertir la force en vitesse.",
    },
  ];
  return (
    <VideoSection src={vs.training.bgVideoUrl} poster={vs.training.poster} className="min-h-[70vh]">
      <Kicker>{vs.training.kicker}</Kicker>
      <h2 className="mt-3 max-w-3xl text-5xl uppercase leading-none md:text-7xl">
        {vs.training.title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-white">{vs.training.text}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={p.t} className="border-t border-foreground/30 pt-5">
            <p className="font-display text-lg text-primary">0{i + 1}</p>
            <h3 className="mt-1 text-2xl uppercase">{p.t}</h3>
            <p className="mt-2 text-sm text-foreground/75">{p.d}</p>
          </div>
        ))}
      </div>
    </VideoSection>
  );
}

function Spikes() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionTitle kicker="Culture Spikes" title="L'évolution de la pointe" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {spikeModels.map((s) => (
          <div key={s.id} className="group overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-square overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-4xl text-primary">{s.era}</p>
              <h3 className="mt-1 text-xl uppercase">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.story}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                Poids : {s.weight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  const [done, setDone] = useState(false);
  return (
    <VideoSection
      src={vs.manifesto.bgVideoUrl}
      poster={vs.manifesto.poster}
      className="min-h-[50vh]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Kicker>{vs.manifesto.kicker}</Kicker>
        <h2 className="mt-3 text-5xl uppercase leading-none md:text-7xl">{vs.manifesto.title}</h2>
        <p className="mt-6 text-lg text-white">{vs.manifesto.text}</p>
        {done ? (
          <p className="mt-8 font-semibold text-primary">
            Bienvenue dans UNLEASHED. Prochaine édition vendredi.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-md gap-2"
          >
            <input
              required
              type="email"
              placeholder="Votre e-mail"
              className="flex-1 rounded-full border border-foreground/30 bg-background/60 px-5 py-3 outline-none backdrop-blur focus:border-primary"
            />
            <button className="cursor-pointer rounded-full bg-primary px-6 py-3 font-bold uppercase text-primary-foreground transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 shadow-lg">
              S'abonner
            </button>
          </form>
        )}
      </div>
    </VideoSection>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <FlashTrack />
      <Biomeca />
      <Dossiers />
      <PhotoFinish />
      <Rankings />
      <Training />
      <Spikes />
      <Manifesto />
    </main>
  );
}
