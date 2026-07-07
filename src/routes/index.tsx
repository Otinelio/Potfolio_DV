import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowDown, ArrowUpRight, ArrowRight, Plus, Minus,
  Compass, Ruler, PenTool, Code2, Rocket,
} from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { ValuesMarquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/projects";
import { testimonials, faqs } from "@/data/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DigitalVision — Studio digital premium à Lomé" },
      { name: "description", content: "Nous concevons des expériences digitales qui font autorité. Sites web, applications, design UX/UI et branding pour marques ambitieuses." },
      { property: "og:title", content: "DigitalVision — Studio digital premium à Lomé" },
      { property: "og:description", content: "Nous concevons des expériences digitales qui font autorité." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { title: "Création de sites web premium", desc: "Sites vitrines, éditoriaux, e-commerce.", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format" },
  { title: "Développement d'applications web", desc: "Plateformes SaaS et outils métier.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format" },
  { title: "Développement d'applications mobiles", desc: "iOS, Android et cross-platform.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format" },
  { title: "Design UX/UI", desc: "Recherche, systèmes de design, interfaces.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80&auto=format" },
  { title: "Branding & identité visuelle", desc: "Stratégie de marque, systèmes visuels.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format" },
  { title: "Solutions digitales sur mesure", desc: "Produits complexes, sur-mesure.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format" },
];

const processSteps = [
  { icon: Compass, title: "Découverte", desc: "Comprendre vos enjeux et vos utilisateurs." },
  { icon: Ruler, title: "Stratégie", desc: "Définir la vision, le périmètre, le plan." },
  { icon: PenTool, title: "Design", desc: "Concevoir chaque écran avec précision." },
  { icon: Code2, title: "Développement", desc: "Construire avec rigueur et performance." },
  { icon: Rocket, title: "Lancement & suivi", desc: "Déployer, mesurer, améliorer." },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 pt-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <motion.div style={{ y, opacity }} className="absolute -right-20 md:right-10 top-1/4 w-[280px] md:w-[520px] aspect-square rounded-full border border-white/10" />
        <motion.div style={{ y }} className="absolute -left-40 bottom-0 w-[300px] md:w-[600px] aspect-square rounded-full" aria-hidden>
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(246,212,0,0.10) 0%, transparent 60%)" }} />
        </motion.div>

        <div className="container-page relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--amber-signature)" }} />
            <span className="text-eyebrow">Studio digital · Lomé, Togo</span>
          </motion.div>

          <h1 className="text-display-xl max-w-[18ch]">
            {["Nous concevons", "des expériences", "digitales"].map((line, i) => (
              <motion.span
                key={i}
                className="block overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </motion.span>
            ))}
            <motion.span
              className="block overflow-hidden"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", fontWeight: 400 }}
            >
              qui font autorité<span style={{ color: "var(--amber-signature)" }}>.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Sites web, applications et produits digitaux, pensés pour la performance et le prestige — pour des marques ambitieuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Démarrer un projet <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/realisations" className="btn-ghost">
              Voir nos réalisations
            </Link>
          </motion.div>

          <div className="mt-16 md:mt-24 flex items-center gap-3 text-muted-foreground scroll-indicator">
            <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-eyebrow">Scroller</span>
          </div>
        </div>
      </section>

      <ValuesMarquee />

      {/* VISION */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="01" eyebrow="Notre vision" title={<>Votre vision, <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>notre mission</span>.</>} />
        <div className="hairline-t hairline-b py-16 md:py-24">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-4xl leading-relaxed text-white/90 font-medium" style={{ fontFamily: "var(--font-display)" }}>
                Depuis 3 ans, nous croyons que chaque marque mérite une empreinte digitale unique. Nous concevons des plateformes qui allient esthétisme de pointe et performances techniques irréprochables, sans jamais faire de compromis sur la qualité.
              </p>
              <div className="mt-12 flex justify-center">
                <div className="w-16 h-px bg-[color:var(--amber-signature)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="02" eyebrow="Nos expertises" title={<>Six pratiques.<br/>Une exigence unique.</>} />
        <ServicesList />
        <div className="mt-12">
          <Link to="/services" className="btn-ghost">
            Explorer les services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="03" eyebrow="Réalisations" title={<>Nos derniers travaux, <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic" }}>sélectionnés</span>.</>} />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}><ProjectCard project={p} index={i} /></Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/realisations" className="btn-ghost">
            Voir tous nos projets <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="04" eyebrow="Notre processus" title="Cinq étapes. Zéro approximation." />
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          {processSteps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-0 h-px bg-[color:var(--amber-signature)]" style={{ width: `${(i + 1) * 20}%` }} />
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-background relative">
                  <s.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--amber-signature)" }} />
                </div>
                <p className="mt-6 text-eyebrow">0{i + 1}</p>
                <h3 className="text-xl mt-2 font-medium" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSlider />

      {/* FAQ */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="06" eyebrow="Questions fréquentes" title="Vos questions, nos réponses." />
        <div className="max-w-4xl">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader number="07" eyebrow="Contact" title={<>Parlons de votre <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>projet</span>.</>} />
        <ContactBlock />
      </section>
    </>
  );
}

function ServicesList() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="relative">
      {services.map((s, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="group hairline-t last:hairline-b py-8 md:py-10 flex items-center justify-between gap-6 cursor-pointer transition-colors"
        >
          <div className="flex items-baseline gap-6 md:gap-10 flex-1">
            <span className="text-xs text-muted-foreground shrink-0" style={{ fontFamily: "var(--font-mono)" }}>0{i + 1}</span>
            <div className="flex-1">
              <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-500 ${hover === i ? "text-white" : "text-white/60 group-hover:text-white"}`} style={{ fontFamily: "var(--font-display)" }}>
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-md">{s.desc}</p>
            </div>
          </div>
          <motion.div
            className="hidden md:block absolute pointer-events-none rounded-lg overflow-hidden border border-white/10"
            style={{ width: 240, height: 160, right: "5%" }}
            animate={{ opacity: hover === i ? 1 : 0, y: hover === i ? 0 : 20 }}
            transition={{ duration: 0.4 }}
          >
            <img src={s.image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div animate={{ x: hover === i ? 0 : -8, opacity: hover === i ? 1 : 0.4 }} className="shrink-0">
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} style={{ color: hover === i ? "var(--amber-signature)" : undefined }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader number="05" eyebrow="Témoignages" title="Ils nous font confiance." />
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-9">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", fontWeight: 400 }}
          >
            « {t.quote} »
          </motion.blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full grid place-items-center text-black font-medium" style={{ background: "var(--amber-signature)", fontFamily: "var(--font-display)" }}>
              {t.author.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div>
              <p className="text-sm font-medium">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 flex md:flex-col gap-3 md:items-end">
          <div className="flex gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Témoignage ${k + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${k === i ? "w-8" : ""}`}
                style={{ background: k === i ? "var(--amber-signature)" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="w-11 h-11 rounded-full border border-white/20 grid place-items-center hover:border-[color:var(--amber-signature)] transition">
              <ArrowRight className="w-4 h-4 rotate-180" strokeWidth={1.5} />
            </button>
            <button onClick={() => setI((i + 1) % testimonials.length)} className="w-11 h-11 rounded-full border border-white/20 grid place-items-center hover:border-[color:var(--amber-signature)] transition">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="hairline-t last:hairline-b">
      <button onClick={() => setOpen(o => !o)} className="w-full py-6 flex items-center justify-between gap-6 text-left group">
        <span className="text-lg md:text-xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{q}</span>
        <span className="w-10 h-10 rounded-full border border-white/20 grid place-items-center group-hover:border-[color:var(--amber-signature)] transition shrink-0">
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.4 }}>
            {open ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
          </motion.span>
        </span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
        <p className="pb-6 text-muted-foreground leading-relaxed max-w-3xl">{a}</p>
      </motion.div>
    </div>
  );
}

import { ContactBlock } from "@/components/site/ContactBlock";
