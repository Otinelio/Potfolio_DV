export type Project = {
  slug: string;
  name: string;
  client: string;
  category: "Web" | "App Mobile" | "Branding" | "UX/UI";
  year: string;
  cover: string;
  tagline: string;
  context: string;
  sector: string;
  objectives: string[];
  solution: string;
  tags: string[];
  results: { value: string; label: string }[];
  gallery: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "refonte-plateforme-fintech-sahel",
    name: "Sahel Pay",
    client: "Sahel Financial Group",
    category: "Web",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format",
    tagline: "Une plateforme fintech pensée pour l'Afrique de l'Ouest.",
    context: "Sahel Financial Group souhaitait unifier ses services de paiement mobile, transfert et micro-crédit dans une expérience unique, moderne et rassurante pour ses 200 000 utilisateurs.",
    sector: "Fintech / Services financiers",
    objectives: [
      "Unifier trois produits dans une interface cohérente",
      "Réduire le temps d'onboarding de 12 à 3 minutes",
      "Rassurer par un design premium et institutionnel",
      "Optimiser pour les connexions bas débit",
    ],
    solution: "Nous avons repensé l'architecture d'information autour de trois parcours clés, conçu un design system sombre et haute-lisibilité, et implémenté une PWA performante fonctionnant en mode dégradé.",
    tags: ["React", "Next.js", "PostgreSQL", "Design System"],
    results: [
      { value: "+62%", label: "Conversions onboarding" },
      { value: "-74%", label: "Temps de chargement" },
      { value: "4.8/5", label: "Note App Store" },
      { value: "3x", label: "Croissance MAU" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&auto=format",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80&auto=format",
    ],
    testimonial: {
      quote: "DigitalVision a transformé notre vision en un produit dont nous sommes fiers. Le niveau d'exécution rivalise avec les meilleurs acteurs européens.",
      author: "Amina Ouedraogo",
      role: "CPO, Sahel Financial Group",
    },
  },
  {
    slug: "app-mobile-logistique-atlantique",
    name: "Atlantique Fleet",
    client: "Groupe Atlantique",
    category: "App Mobile",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80&auto=format",
    tagline: "L'application qui pilote 1 200 chauffeurs en temps réel.",
    context: "Groupe Atlantique, leader logistique portuaire, avait besoin d'une application terrain pour coordonner ses opérations sur trois pays.",
    sector: "Logistique & Transport",
    objectives: [
      "Digitaliser 100% des tournées papier",
      "Offrir une visibilité temps réel à la direction",
      "Fonctionner en zones sans réseau",
      "Former les équipes en moins de 30 minutes",
    ],
    solution: "Application React Native avec architecture offline-first, synchronisation intelligente et interface pensée pour l'usage terrain en une main.",
    tags: ["React Native", "Node.js", "Offline-first", "Mapbox"],
    results: [
      { value: "-45%", label: "Retards de livraison" },
      { value: "1 200", label: "Chauffeurs actifs" },
      { value: "99.2%", label: "Disponibilité" },
      { value: "18j", label: "Time-to-market" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1580795479025-3d0e1e2c3e3e?w=1600&q=80&auto=format",
    ],
  },
  {
    slug: "identite-visuelle-maison-cafe",
    name: "Maison Kafé",
    client: "Maison Kafé",
    category: "Branding",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80&auto=format",
    tagline: "Une identité qui célèbre le café ouest-africain d'exception.",
    context: "Maison Kafé, torréfacteur premium togolais, préparait son expansion internationale et avait besoin d'une identité à la hauteur de ses ambitions.",
    sector: "Retail / Food & Beverage",
    objectives: [
      "Positionner la marque sur le segment premium",
      "Créer un système déclinable sur 40+ SKUs",
      "Préparer l'export sur les marchés européens",
    ],
    solution: "Système d'identité modulaire — typographie éditoriale, palette terreuse, motifs héritages — décliné du packaging au flagship.",
    tags: ["Brand Strategy", "Identity", "Packaging", "Art Direction"],
    results: [
      { value: "+140%", label: "Prix moyen panier" },
      { value: "8", label: "Pays de distribution" },
      { value: "42", label: "Références produit" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80&auto=format",
    ],
  },
  {
    slug: "dashboard-analytique-mediagroupe",
    name: "Media Insight",
    client: "MediaGroupe WA",
    category: "UX/UI",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format",
    tagline: "Le dashboard analytique qui pilote 40 rédactions.",
    context: "MediaGroupe WA voulait donner à ses rédacteurs et éditeurs une vision claire de la performance de leurs contenus en temps réel.",
    sector: "Média & Édition",
    objectives: [
      "Rendre la donnée actionnable pour les non-analystes",
      "Unifier 6 sources de données",
      "Concevoir un design system data-viz cohérent",
    ],
    solution: "Design system data-first avec une bibliothèque de composants graphiques, hiérarchie visuelle rigoureuse et modes narratifs pour raconter la donnée.",
    tags: ["Figma", "Design System", "Data-Viz", "Recharts"],
    results: [
      { value: "+35%", label: "Adoption interne" },
      { value: "-50%", label: "Temps de reporting" },
      { value: "40", label: "Rédactions équipées" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format",
    ],
  },
  {
    slug: "ecommerce-mode-lome",
    name: "Nyaba Studio",
    client: "Nyaba",
    category: "Web",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format",
    tagline: "L'e-commerce premium de la mode togolaise.",
    context: "Nyaba, marque de mode contemporaine ancrée à Lomé, souhaitait une plateforme e-commerce à la hauteur de son positionnement éditorial.",
    sector: "Mode & Retail",
    objectives: [
      "Créer une expérience éditoriale premium",
      "Optimiser les conversions internationales",
      "Intégrer un paiement multi-devise fluide",
    ],
    solution: "Plateforme Shopify Hydrogen sur-mesure avec direction artistique éditoriale, animations soignées et checkout optimisé.",
    tags: ["Shopify Hydrogen", "Stripe", "Cloudinary"],
    results: [
      { value: "+210%", label: "Ventes internationales" },
      { value: "3.2s", label: "LCP moyen" },
      { value: "22", label: "Pays livrés" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&auto=format",
    ],
  },
  {
    slug: "app-sante-clinique-libertes",
    name: "Clinique Libertés",
    client: "Clinique des Libertés",
    category: "App Mobile",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&auto=format",
    tagline: "L'application patient d'une clinique de référence.",
    context: "Digitalisation du parcours patient pour une clinique privée de premier plan à Lomé.",
    sector: "Santé",
    objectives: [
      "Simplifier la prise de rendez-vous",
      "Sécuriser le dossier patient",
      "Fluidifier le paiement des consultations",
    ],
    solution: "Application native cross-platform avec authentification biométrique, dossier patient chiffré et téléconsultation intégrée.",
    tags: ["React Native", "HIPAA-inspired", "WebRTC"],
    results: [
      { value: "+80%", label: "RDV en ligne" },
      { value: "12 min", label: "Attente moyenne" },
      { value: "35k", label: "Utilisateurs actifs" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1600&q=80&auto=format",
    ],
  },
];
