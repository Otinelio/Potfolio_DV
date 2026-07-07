import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ number, eyebrow, title, intro }: { number: string; eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 container-page">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-eyebrow" style={{ color: "var(--amber-signature)" }}>{number}</span>
        <span className="h-px w-10 bg-white/20" />
        <span className="text-eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-display-xl max-w-6xl"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </section>
  );
}
