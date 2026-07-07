import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  number,
  eyebrow,
  title,
  intro,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-eyebrow" style={{ color: "var(--amber-signature)" }}>{number}</span>
        <span className="h-px w-10 bg-white/20" />
        <span className="text-eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-display-lg max-w-4xl"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
