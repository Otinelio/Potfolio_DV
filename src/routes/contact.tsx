import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ContactBlock } from "@/components/site/ContactBlock";
import { SectionHeader } from "@/components/site/SectionHeader";
import { faqs } from "@/data/testimonials";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DigitalVision" },
      { name: "description", content: "Parlons de votre projet. Réponse sous 24h. Startup numérique basée à Lomé, Togo — intervenant à l'international." },
      { property: "og:title", content: "Contact — DigitalVision" },
      { property: "og:description", content: "Parlons de votre projet." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

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

function ContactPage() {
  return (
    <>
      <PageHero
        number="→ 04"
        eyebrow="Contact"
        title={<>Parlons de votre <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>projet</span>.</>}
        intro="Nous répondons à chaque demande dans les 24 heures ouvrées. Décrivez-nous votre besoin — nous reviendrons vers vous avec les bonnes questions."
      />

      <section className="container-page pb-24 hairline-t pt-16">
        <ContactBlock />
      </section>

      <section className="container-page py-24 hairline-t">
        <div className="max-w-xl mx-auto">
          <div className="p-10 rounded-xl border border-white/10 bg-[color:var(--surface-1)]">
            <Clock className="w-6 h-6 mb-6" strokeWidth={1.5} style={{ color: "var(--amber-signature)" }} />
            <p className="text-eyebrow mb-2">Disponibilité</p>
            <p className="text-2xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>Lun. – Ven. · 9h – 18h GMT</p>
            <p className="text-sm text-muted-foreground mb-8">Nous nous adaptons aux fuseaux horaires de nos clients — Europe, Afrique de l'Ouest, Amérique du Nord.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between hairline-t pt-3"><span className="text-muted-foreground">Réponse email</span><span>&lt; 24h</span></li>
              <li className="flex justify-between hairline-t pt-3"><span className="text-muted-foreground">Premier appel</span><span>30 min</span></li>
              <li className="flex justify-between hairline-t pt-3"><span className="text-muted-foreground">Devis détaillé</span><span>5-7 jours</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader number="03" eyebrow="Avant de commencer" title="Les questions qu'on nous pose souvent." />
        <div className="max-w-4xl mx-auto">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}
