import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Smartphone, LayoutGrid, Sparkles, PenTool, Layers } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DigitalVision" },
      { name: "description", content: "Sites web, applications web et mobiles, design UX/UI et branding. Six pratiques, une même exigence d'excellence." },
      { property: "og:title", content: "Services — DigitalVision" },
      { property: "og:description", content: "Six pratiques, une même exigence d'excellence." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe,
    title: "Sites web premium",
    desc: "Sites vitrines éditoriaux, e-commerce et plateformes de contenu conçus pour marquer les esprits et convertir.",
    deliverables: ["Direction artistique", "Design system", "Développement full-stack", "SEO technique"],
    tech: ["React", "Next.js", "Laravel", "WordPress"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80&auto=format",
  },
  {
    icon: LayoutGrid,
    title: "Applications web",
    desc: "SaaS, dashboards analytiques, outils métier complexes. Nous construisons des produits robustes, scalables et pensés utilisateur.",
    deliverables: ["Architecture technique", "Design system produit", "Développement", "QA & tests"],
    tech: ["React", "Laravel", "Node.js", "PostgreSQL", "MySQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    desc: "Applications natives ou cross-platform pour iOS et Android, pensées offline-first et optimisées pour le terrain.",
    deliverables: ["UX terrain", "Design natif", "Développement cross-platform", "Publication stores"],
    tech: ["Flutter", "React Native", "Expo", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80&auto=format",
  },
  {
    icon: Sparkles,
    title: "Design UX/UI",
    desc: "De la recherche utilisateur au design system, nous concevons des interfaces claires, cohérentes et mémorables.",
    deliverables: ["Recherche utilisateur", "Wireframes", "Prototypes", "Design system"],
    tech: ["Figma", "Adobe XD", "Illustrator"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80&auto=format",
  },
  {
    icon: PenTool,
    title: "Branding & identité",
    desc: "Stratégie de marque, systèmes visuels, typographie sur-mesure. Nous construisons des marques qui durent.",
    deliverables: ["Stratégie de marque", "Logo & système", "Guidelines", "Applications"],
    tech: ["Adobe Suite", "Figma", "Canva"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format",
  },
  {
    icon: Layers,
    title: "Solutions sur mesure",
    desc: "Produits digitaux complexes nécessitant une approche entièrement sur-mesure : IA, temps réel, intégrations avancées.",
    deliverables: ["Discovery approfondi", "R&D technique", "Architecture", "Livraison itérative"],
    tech: ["Stack adaptée au projet"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        number="→ 01"
        eyebrow="Nos expertises"
        title={<>Six pratiques.<br/><span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>Une seule</span> exigence.</>}
        intro="Nous concevons et développons chaque service comme un livrable d'exception, avec la même rigueur, quelle que soit l'échelle."
      />

      <section className="container-page">
        {services.map((s, i) => (
          <Reveal key={i} delay={0.05}>
            <article className="hairline-t py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <p className="text-eyebrow mb-6" style={{ color: "var(--amber-signature)" }}>0{i + 1} · Service</p>
                <div className="flex items-center gap-4 mb-6">
                  <s.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "var(--amber-signature)" }} />
                  <h2 className="text-display-md">{s.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">{s.desc}</p>
                <div className="grid grid-cols-2 gap-6 max-w-lg">
                  <div>
                    <p className="text-eyebrow mb-3">Livrables</p>
                    <ul className="space-y-1.5 text-sm">
                      {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-eyebrow mb-3">Technologies possibles</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {s.tech.map((d) => <li key={d}>— {d}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[900ms]" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-page py-24 hairline-t mt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display-md max-w-xl">Un service que vous ne voyez pas ici ?</h2>
          <Link to="/contact" className="btn-primary">Parlons-en <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
