import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin, Facebook, Instagram, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10" style={{ background: "var(--surface-1)" }}>
      {/* Big CTA */}
      <section className="container-page py-24 md:py-32">
        <p className="text-eyebrow mb-6">— Prêt à démarrer ?</p>
        <h2 className="text-display-lg max-w-4xl">
          Prêt à construire quelque chose{" "}
          <span style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--amber-signature)" }}>
            d'exceptionnel
          </span>{" "}
          ?
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">
            Démarrer un projet <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/realisations" className="btn-ghost">
            Voir nos réalisations
          </Link>
        </div>
      </section>

      <div className="hairline-t">
        <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-lg font-medium" style={{ fontFamily: "var(--font-display)" }}>Digital</span>
              <span className="text-lg font-medium" style={{ fontFamily: "var(--font-display)", color: "var(--amber-signature)" }}>Vision</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--amber-signature)" }} />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Studio digital premium. Nous concevons des expériences numériques qui font autorité.
            </p>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-[color:var(--amber-signature)] transition">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-[color:var(--amber-signature)] transition">Services</Link></li>
              <li><Link to="/realisations" className="hover:text-[color:var(--amber-signature)] transition">Réalisations</Link></li>
              <li><Link to="/a-propos" className="hover:text-[color:var(--amber-signature)] transition">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--amber-signature)] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Sites web premium</li>
              <li>Applications web</li>
              <li>Applications mobiles</li>
              <li>Design UX/UI</li>
              <li>Branding & identité</li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
                <a href="mailto:digitalvisiontg@gmail.com" className="hover:text-[color:var(--amber-signature)] transition">digitalvisiontg@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
                <span>+228 72 80 10 75 / 98 47 27 01</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: () => <FaWhatsapp className="w-4 h-4" />, url: "https://wa.me/22872801075" },
                { icon: Instagram, url: "https://www.instagram.com/digitale_visiontg?igsh=MzA3ZjIyam9sempl" },
                { icon: Facebook, url: "https://facebook.com/DigitalVision" },
                { icon: Github, url: "https://github.com/otinelio" }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[color:var(--amber-signature)] hover:text-[color:var(--amber-signature)] transition">
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline-t">
          <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
            <p>© {new Date().getFullYear()} DigitalVision — Tous droits réservés</p>
            <p>Fait avec précision à Lomé, Togo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
