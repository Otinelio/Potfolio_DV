import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        aria-hidden
      >
        <div className="h-full w-full" style={{ background: "var(--amber-signature)" }} />
      </motion.div>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "backdrop-blur-xl bg-background/75 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-1.5 group">
            <span className="text-lg md:text-xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Digital
            </span>
            <span className="text-lg md:text-xl font-medium tracking-tight" style={{ color: "var(--amber-signature)", fontFamily: "var(--font-display)" }}>
              Vision
            </span>
            <span className="w-1.5 h-1.5 rounded-full ml-0.5" style={{ background: "var(--amber-signature)" }} />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative text-sm text-foreground/80 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "var(--amber-signature)" }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden md:inline-flex">
              Démarrer un projet
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Fermer" : "Menu"}
            >
              {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 container-page">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={l.to} className="text-4xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary mt-8 self-start">
                Démarrer un projet <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
