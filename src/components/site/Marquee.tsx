export const values = [
  "Excellence",
  "Innovation",
  "Rigueur",
  "Transparence",
  "Performance",
  "Créativité",
  "Engagement",
  "Sur-mesure",
];

export function ValuesMarquee() {
  const doubled = [...values, ...values];
  return (
    <div className="hairline-t hairline-b py-8 overflow-hidden">
      <div className="flex marquee-track gap-16 whitespace-nowrap opacity-60 hover:[animation-play-state:paused]">
        {doubled.map((v, i) => (
          <span key={i} className="text-2xl md:text-3xl font-medium text-muted-foreground shrink-0" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            {v} <span className="mx-8 text-white/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
