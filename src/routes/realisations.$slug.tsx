import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Target } from "lucide-react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/realisations/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Projet introuvable — DigitalVision" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Étude de cas — DigitalVision` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — DigitalVision` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/realisations/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.name,
          author: { "@type": "Organization", name: "DigitalVision" },
          about: p.sector,
          datePublished: p.year,
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center container-page">
      <div className="text-center">
        <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>404</p>
        <h1 className="text-display-lg">Projet introuvable</h1>
        <Link to="/realisations" className="btn-primary mt-8">Retour aux réalisations</Link>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 container-page">
        <Link to="/realisations" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-10">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Toutes les réalisations
        </Link>
        <div className="flex flex-wrap gap-4 mb-8 text-eyebrow">
          <span style={{ color: "var(--amber-signature)" }}>{project.category}</span>
          <span>·</span><span>{project.year}</span>
          <span>·</span><span>{project.sector}</span>
        </div>
        <h1 className="text-display-xl max-w-5xl">{project.name}</h1>
        <p className="mt-8 max-w-2xl text-xl md:text-2xl text-muted-foreground leading-snug" style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic" }}>
          {project.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="px-3 py-1.5 rounded-full border border-white/15 text-xs" style={{ fontFamily: "var(--font-mono)" }}>{t}</span>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ scale: 1.05, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 md:mt-24 mx-4 md:mx-8 aspect-[16/9] overflow-hidden rounded-xl"
      >
        <img src={project.cover} alt={project.name} className="w-full h-full object-cover" />
      </motion.div>

      {/* Context */}
      <section className="container-page py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>01 · Contexte</p>
          <h2 className="text-display-md">Le projet</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl leading-relaxed">{project.context}</p>
          <dl className="mt-10 grid grid-cols-2 gap-8 hairline-t pt-8">
            <div><dt className="text-eyebrow mb-2">Client</dt><dd className="text-lg">{project.client}</dd></div>
            <div><dt className="text-eyebrow mb-2">Secteur</dt><dd className="text-lg">{project.sector}</dd></div>
            <div><dt className="text-eyebrow mb-2">Année</dt><dd className="text-lg">{project.year}</dd></div>
            <div><dt className="text-eyebrow mb-2">Catégorie</dt><dd className="text-lg">{project.category}</dd></div>
          </dl>
        </div>
      </section>

      {/* Objectives */}
      <section className="container-page py-24 hairline-t">
        <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>02 · Objectifs</p>
        <h2 className="text-display-md mb-16 max-w-3xl">Les enjeux à résoudre.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.objectives.map((o, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-8 rounded-xl border border-white/10 bg-[color:var(--surface-1)] flex gap-5">
                <div className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(246,212,0,0.1)" }}>
                  <Target className="w-4 h-4" strokeWidth={1.5} style={{ color: "var(--amber-signature)" }} />
                </div>
                <p className="text-lg leading-snug">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="container-page py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>03 · Solution</p>
          <h2 className="text-display-md">Notre approche.</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 space-y-6">
        {project.gallery.map((g, i) => (
          <Reveal key={i}>
            <div className={`overflow-hidden rounded-xl ${i % 2 === 0 ? "aspect-[16/9]" : "aspect-[4/3] max-w-4xl mx-auto"}`}>
              <img src={g} alt={`${project.name} — vue ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Results */}
      <section className="container-page py-24 md:py-32 mt-16 hairline-t">
        <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>04 · Résultats</p>
        <h2 className="text-display-md mb-16 max-w-3xl">Des chiffres qui parlent.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {project.results.map((r, i) => {
            const numMatch = r.value.match(/(-?\d+)/);
            const num = numMatch ? parseInt(numMatch[1]) : 0;
            const rest = r.value.replace(/-?\d+/, "");
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="md:border-l md:border-white/10 md:pl-6">
                  <p className="text-display-lg" style={{ color: "var(--amber-signature)" }}>
                    {numMatch ? <><AnimatedCounter value={Math.abs(num)} />{rest}</> : r.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="container-page py-24 hairline-t">
          <blockquote className="text-3xl md:text-4xl leading-[1.2] max-w-4xl" style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic" }}>
            « {project.testimonial.quote} »
          </blockquote>
          <p className="mt-8 text-sm text-muted-foreground">
            {project.testimonial.author} — {project.testimonial.role}
          </p>
        </section>
      )}

      {/* Nav */}
      <section className="container-page py-16 hairline-t grid md:grid-cols-2 gap-6">
        <Link to="/realisations/$slug" params={{ slug: prev.slug }} className="group p-8 rounded-xl border border-white/10 hover:border-[color:var(--amber-signature)] transition">
          <div className="flex items-center gap-2 text-eyebrow mb-3"><ArrowLeft className="w-3 h-3" /> Projet précédent</div>
          <p className="text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>{prev.name}</p>
        </Link>
        <Link to="/realisations/$slug" params={{ slug: next.slug }} className="group p-8 rounded-xl border border-white/10 hover:border-[color:var(--amber-signature)] transition md:text-right">
          <div className="flex items-center gap-2 text-eyebrow mb-3 md:justify-end">Projet suivant <ArrowRight className="w-3 h-3" /></div>
          <p className="text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>{next.name}</p>
        </Link>
      </section>

      <section className="container-page pb-8">
        <Link to="/contact" className="btn-primary">
          Un projet similaire ? Parlons-en <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
