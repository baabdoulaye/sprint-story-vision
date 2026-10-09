import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll } from "framer-motion";
import { Clock, Quote } from "lucide-react";
import { articles, relativeTime } from "@/data/mockData";
import { ArticleCard, CategoryBadge } from "@/components/site/Cards";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Article introuvable — UNLEASHED" },
          { name: "robots", content: "noindex" },
        ],
      };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — UNLEASHED` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-5xl uppercase">Faux départ</h1>
      <p className="mt-4 text-muted-foreground">Cet article n'existe pas.</p>
      <Link to="/" className="mt-6 inline-block text-primary">
        Retour à l'accueil
      </Link>
    </main>
  );
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const { scrollYProgress } = useScroll();
  const related = articles.filter((x) => x.id !== a.id).slice(0, 3);
  return (
    <main>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary"
      />
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden">
        {/* Image de fond pure sans requête vidéo */}
        <img
          src={a.image}
          alt={a.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14">
          <CategoryBadge>{a.category}</CategoryBadge>
          <h1 className="mt-4 text-4xl uppercase leading-[0.95] md:text-7xl">{a.title}</h1>
          <p className="mt-5 text-sm text-muted-foreground">
            Par <b className="text-foreground">{a.author}</b> · {relativeTime(a.date)} ·{" "}
            <Clock className="inline h-3.5 w-3.5" /> {a.readTime} min · {a.disciplines.join(" / ")}
          </p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xl font-medium leading-relaxed">{a.excerpt}</p>
        {a.content.map((b, i) => {
          switch (b.type) {
            case "p":
              return (
                <p key={i} className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              );
            case "h2":
              return (
                <h2 key={i} className="mt-14 text-3xl uppercase md:text-4xl">
                  <span className="text-primary">/ </span>
                  {b.text}
                </h2>
              );
            case "quote":
              return (
                <blockquote key={i} className="my-12 border-l-4 border-track pl-6">
                  <Quote className="h-8 w-8 text-track" />
                  <p className="mt-2 font-display text-3xl uppercase leading-tight md:text-4xl">
                    {b.text}
                  </p>
                  {b.cite && (
                    <cite className="mt-3 block text-sm not-italic text-muted-foreground">
                      — {b.cite}
                    </cite>
                  )}
                </blockquote>
              );
            case "box":
              return (
                <aside key={i} className="my-10 rounded-xl border border-primary/40 bg-card p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    {b.title}
                  </p>
                  <p className="mt-3 leading-relaxed">{b.text}</p>
                </aside>
              );
            case "stats":
              return (
                <div key={i} className="my-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {b.items.map((s) => (
                    <div key={s.label} className="rounded-lg border border-border bg-secondary p-4">
                      <p className="font-display text-3xl text-lime">{s.value}</p>
                      <p className="mt-1 text-[11px] uppercase text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              );
          }
        })}
        <div className="mt-10 flex flex-wrap gap-2">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </article>
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-3xl uppercase">À lire ensuite</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <ArticleCard key={r.id} article={r} />
          ))}
        </div>
      </section>
    </main>
  );
}
