import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Check, Loader2, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ContactBlock() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };

  return (
    <div className="grid md:grid-cols-12 gap-12 md:gap-16">
      <div className="md:col-span-7">
        <form onSubmit={submit} className="space-y-8">
          {[
            { k: "name", label: "Nom complet", type: "text" },
            { k: "email", label: "Email professionnel", type: "email" },
          ].map((f) => (
            <div key={f.k} className="relative">
              <input
                required
                type={f.type}
                value={(form as any)[f.k]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-6 text-lg focus:outline-none focus:border-[color:var(--amber-signature)] transition"
                id={f.k}
              />
              <label htmlFor={f.k} className="absolute left-0 top-6 text-muted-foreground pointer-events-none transition-all peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
                {f.label}
              </label>
            </div>
          ))}

          <div>
            <label className="text-eyebrow block mb-3">Type de projet</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[color:var(--amber-signature)]">
              <option value="" className="bg-background">— Choisir —</option>
              <option className="bg-background">Site web</option>
              <option className="bg-background">Application web</option>
              <option className="bg-background">Application mobile</option>
              <option className="bg-background">UX/UI</option>
              <option className="bg-background">Branding</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder=" "
              id="msg"
              className="peer w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-6 text-lg focus:outline-none focus:border-[color:var(--amber-signature)] transition resize-none"
            />
            <label htmlFor="msg" className="absolute left-0 top-6 text-muted-foreground pointer-events-none transition-all peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
              Parlez-nous de votre projet
            </label>
          </div>

          <button type="submit" disabled={status !== "idle"} className="btn-primary">
            {status === "idle" && <>Envoyer le message <ArrowUpRight className="w-4 h-4" /></>}
            {status === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> Envoi...</>}
            {status === "done" && <><Check className="w-4 h-4" /> Message envoyé</>}
          </button>
        </form>
      </div>

      <aside className="md:col-span-5 md:pl-8 md:border-l border-white/10 space-y-8">
        <div>
          <p className="text-eyebrow mb-3">Réponse rapide</p>
          <p className="text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>Réponse sous 24h ouvrées</p>
        </div>
        <motion.a href="mailto:digitalvisiontg@gmail.com" whileHover={{ x: 4 }} className="flex items-center gap-4 group">
          <div className="w-11 h-11 rounded-full border border-white/15 grid place-items-center group-hover:border-[color:var(--amber-signature)] transition">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm">digitalvisiontg@gmail.com</p>
          </div>
        </motion.a>
        <motion.a href="https://wa.me/22872801075" target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }} className="flex items-center gap-4 group">
          <div className="w-11 h-11 rounded-full border border-white/15 grid place-items-center group-hover:border-[color:var(--amber-signature)] transition">
            <FaWhatsapp className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">WhatsApp / Tél</p>
            <p className="text-sm">+228 72 80 10 75 / 98 47 27 01</p>
          </div>
        </motion.a>
      </aside>
    </div>
  );
}
