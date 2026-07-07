import { createFileRoute } from "@tanstack/react-router";
import { Compass, Heart, Zap, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — DigitalVision, startup digitale à Lomé" },
      { name: "description", content: "Fondée en 2024 à Lomé, DigitalVision est une startup numérique qui conçoit des expériences digitales d'exception pour ses clients au Togo et à l'international." },
      { property: "og:title", content: "À propos — DigitalVision" },
      { property: "og:description", content: "Ancrés à Lomé, engagés à l'international." },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, title: "Précision", desc: "Chaque décision est intentionnelle. Rien n'est laissé au hasard." },
  { icon: Heart, title: "Considération", desc: "Nous respectons vos utilisateurs, votre temps et votre budget." },
  { icon: Zap, title: "Performance", desc: "L'esthétique sans la performance est de la décoration." },
  { icon: Award, title: "Excellence", desc: "Un standard mondial, appliqué avec discipline sur chaque livrable." },
];

const team = [
  { name: "ASSIONGBON Roméo", role: "Creative Developer & UI Designer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format" },
  { name: "KOUDIGUE Médard", role: "Lead Design & Développement Mobile", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format" },
  { name: "KENGBO Othnelio", role: "Architecte Backend & Mobile", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        number="→ 03"
        eyebrow="À propos"
        title={<>Nés à Lomé.<br /><span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>Connectés</span> au monde.</>}
        intro="DigitalVision est une startup numérique fondée sur une conviction simple : l'Afrique de l'Ouest peut — et doit — produire au niveau des meilleures agences du monde."
      />

      <section className="container-page py-24 md:py-32 grid md:grid-cols-12 gap-10 hairline-t">
        <div className="md:col-span-5">
          <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>01 · Notre histoire</p>
          <h2 className="text-display-md">Une startup née de l'ambition.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Fondée en 2024 à Lomé, DigitalVision est née de l'ambition de bâtir une startup numérique capable de rivaliser techniquement et créativement avec les meilleures agences, sans avoir besoin de murs — juste du talent, de la rigueur et une connexion internet.</p>
          <p>Nous croyons que les meilleures expériences numériques naissent de la rencontre entre une exécution rigoureuse et une compréhension profonde du contexte. C'est cette double exigence qui guide chacun de nos projets, du plus modeste au plus complexe.</p>
          <p>Aujourd'hui, nous accompagnons plusieurs agences et sociétés au Togo et collaborons avec des partenaires à l'international, le tout depuis Lomé.</p>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader number="02" eyebrow="Nos valeurs" title="Quatre principes non-négociables." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="p-8 rounded-xl border border-white/10 h-full bg-[color:var(--surface-1)]">
                <v.icon className="w-6 h-6 mb-6" strokeWidth={1.5} style={{ color: "var(--amber-signature)" }} />
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader number="03" eyebrow="L'équipe" title="Trois artisans, une vision commune." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms]" />
                </div>
                <p className="mt-4 text-lg font-medium" style={{ fontFamily: "var(--font-display)" }}>{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-16 p-8 rounded-xl border border-white/10 bg-[color:var(--surface-1)] text-center">
            <p className="text-2xl font-medium mb-3" style={{ fontFamily: "var(--font-display)" }}>+ une équipe élargie</p>
            <p className="text-muted-foreground max-w-xl mx-auto">Derrière nos trois fondateurs, une équipe de collaborateurs talentueux nous accompagne selon les projets — designers, développeurs et consultants — pour garantir une exécution d'excellence à chaque étape.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-page py-24 hairline-t">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-eyebrow mb-4" style={{ color: "var(--amber-signature)" }}>04 · Notre positionnement</p>
            <h2 className="text-display-md mb-6">Local par racine.<br />International par ambition.</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Nous croyons que la meilleure façon de servir nos clients est de leur offrir un niveau d'exécution mondial, peu importe où ils se trouvent. Startup 100% digitale, nous travaillons sans frontières — avec la même exigence pour un client à Lomé qu'à l'autre bout du monde.
          </p>
        </div>
      </section>
    </>
  );
}
