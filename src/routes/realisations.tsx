import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — DigitalVision" },
      { name: "description", content: "Une sélection de projets récents : sites web premium, applications mobiles, plateformes SaaS et systèmes de marque." },
      { property: "og:title", content: "Réalisations — DigitalVision" },
      { property: "og:description", content: "Nos derniers projets, sélectionnés." },
      { property: "og:url", content: "/realisations" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: RealisationsPage,
});

const categories = ["Tous", "Web", "App Mobile", "Branding", "UX/UI"] as const;

function RealisationsPage() {
  const [filter, setFilter] = useState<string>("Tous");
  const filtered = useMemo(() => filter === "Tous" ? projects : projects.filter(p => p.category === filter), [filter]);

  return (
    <>
      <PageHero
        number="→ 02"
        eyebrow="Réalisations"
        title={<>Une <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>sélection</span> exigeante.</>}
        intro="Chaque projet est une réponse spécifique à un enjeu réel. Voici quelques-uns de nos travaux récents."
      />

      <section className="container-page">
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-sm border transition-all ${
                filter === c ? "text-black border-transparent" : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30"
              }`}
              style={filter === c ? { background: "var(--amber-signature)" } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.04 }}>
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
