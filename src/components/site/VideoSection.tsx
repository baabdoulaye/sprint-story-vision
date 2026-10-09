import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function BgVideo({ src, poster }: { src: string; poster: string }) {
  return (
    <>
      <img src={poster} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <video src={src} poster={poster} autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 video-veil" />
    </>
  );
}

export function VideoSection({ src, poster, className = "", children, animate = true }: { src: string; poster: string; className?: string; children: ReactNode; animate?: boolean }) {
  return (
    <section className={`relative isolate flex items-center overflow-hidden bg-background ${className}`}>
      <BgVideo src={src} poster={poster} />
      {animate ? (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mx-auto w-full max-w-7xl px-4 py-16">
          {children}
        </motion.div>
      ) : (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">{children}</div>
      )}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{children}</p>;
}
