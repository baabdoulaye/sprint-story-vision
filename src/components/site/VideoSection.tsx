import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function BgVideo({ src, poster }: { src: string; poster: string | undefined }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden"
    >
      {shouldLoad && (
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          // @ts-ignore (si TS râle sur l'attribut fetchPriority)
          fetchPriority="high"
          onCanPlay={() => setIsReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {/* VOILE NOIR LÉGER (on remet de la lumière dans la vidéo) */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
    </div>
  );
}

export function VideoSection({
  src,
  poster,
  className = "",
  children,
  animate = true,
}: {
  src: string;
  poster: string | undefined;
  className?: string;
  children: ReactNode;
  animate?: boolean;
}) {
  return (
    <section
      className={`relative isolate flex items-center overflow-hidden bg-background ${className}`}
    >
      <BgVideo src={src} poster={poster} />
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-7xl px-4 py-16"
        >
          {/* MAGIE DU BACKDROP-FILTER ICI */}
          {/* On ajoute un fond très légèrement translucide + un filtre pour éclaircir */}
          <div className="inline-block rounded-lg p-4 backdrop-blur-sm backdrop-brightness-125 bg-white/5">
            {children}
          </div>
        </motion.div>
      ) : (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">{children}</div>
      )}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="inline-block rounded-md border border-primary/40 bg-black/75 px-3 py-1 shadow-lg backdrop-blur-md">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{children}</p>
    </div>
  );
}
