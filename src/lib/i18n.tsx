import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;
type Translations = Record<Lang, Dict>;

export const translations: Translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.why": "Pourquoi nous",
    "nav.contact": "Contact",
    "nav.cta": "Devis gratuit",

    "hero.eyebrow": "Agence Web · Québec",
    "hero.title1": "Transformons vos sites lents en",
    "hero.title2": "machines à vendre",
    "hero.subtitle": "Nous concevons des sites web ultra-rapides et optimisés pour les entreprises du Québec qui veulent dominer leur marché local.",
    "hero.cta": "Obtenez un devis gratuit",
    "hero.cta2": "Voir nos projets",

    "perf.eyebrow": "La preuve",
    "perf.title": "Vitesse de chargement fulgurante",
    "perf.desc": "Chaque site que nous livrons est testé et optimisé pour atteindre des scores d'élite sur Google PageSpeed Insights — parce que la vitesse, c'est des ventes.",
    "perf.score": "Performance",
    "perf.metric1": "Performance",
    "perf.metric2": "Accessibilité",
    "perf.metric3": "Bonnes pratiques",
    "perf.metric4": "SEO",

    "services.eyebrow": "Nos services",
    "services.title": "Solutions web haut de gamme",
    "services.subtitle": "Tout ce dont votre entreprise a besoin pour rayonner en ligne.",
    "services.s1.title": "Landing Pages",
    "services.s1.desc": "Pages de conversion sur mesure, conçues pour transformer les visiteurs en clients payants.",
    "services.s2.title": "SEO Local",
    "services.s2.desc": "Optimisation Google pour apparaître en première position dans votre quartier au Québec.",
    "services.s3.title": "Maintenance",
    "services.s3.desc": "Sécurité, mises à jour et améliorations continues pour garder votre site au sommet.",

    "projects.eyebrow": "Portfolio",
    "projects.title": "Projets récents",
    "projects.subtitle": "Une sélection de réalisations livrées avec passion et performance.",
    "projects.featured": "Vedette",
    "projects.view": "Voir le projet",

    "why.eyebrow": "Pourquoi Web Solutions",
    "why.title": "L'avantage local, la qualité internationale",
    "why.w1.title": "Bilingue FR / EN",
    "why.w1.desc": "Communication fluide en français et en anglais — votre projet, votre langue.",
    "why.w2.title": "Marché du Québec",
    "why.w2.desc": "Nous comprenons les besoins des entreprises locales et le marché québécois.",
    "why.w3.title": "Performance technique",
    "why.w3.desc": "Code propre, scores PageSpeed élevés et architecture moderne.",
    "why.w4.title": "Support dédié",
    "why.w4.desc": "Un partenaire à long terme, pas seulement un fournisseur.",

    "contact.eyebrow": "Contact",
    "contact.title": "Démarrons votre projet",
    "contact.subtitle": "Parlez-nous de votre vision. Nous répondons sous 24 heures.",
    "contact.name": "Nom complet",
    "contact.email": "Courriel",
    "contact.message": "Votre projet",
    "contact.send": "Envoyer le message",
    "contact.or": "ou contactez-nous directement",

    "footer.rights": "Tous droits réservés.",
    "footer.tagline": "Sites web haute performance pour le Québec.",

    "wa.tooltip": "Discutons sur WhatsApp",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.why": "Why us",
    "nav.contact": "Contact",
    "nav.cta": "Free quote",

    "hero.eyebrow": "Web Agency · Quebec",
    "hero.title1": "Turn slow websites into",
    "hero.title2": "selling machines",
    "hero.subtitle": "We craft blazing-fast, optimized websites for Quebec businesses ready to dominate their local market.",
    "hero.cta": "Get a free quote",
    "hero.cta2": "See our work",

    "perf.eyebrow": "The proof",
    "perf.title": "Blazing fast loading",
    "perf.desc": "Every site we ship is tested and tuned to achieve elite Google PageSpeed scores — because speed equals sales.",
    "perf.score": "Performance",
    "perf.metric1": "Performance",
    "perf.metric2": "Accessibility",
    "perf.metric3": "Best Practices",
    "perf.metric4": "SEO",

    "services.eyebrow": "Our services",
    "services.title": "Premium web solutions",
    "services.subtitle": "Everything your business needs to shine online.",
    "services.s1.title": "Landing Pages",
    "services.s1.desc": "Custom-built conversion pages designed to turn visitors into paying customers.",
    "services.s2.title": "Local SEO",
    "services.s2.desc": "Google optimization to rank first in your Quebec neighborhood.",
    "services.s3.title": "Maintenance",
    "services.s3.desc": "Security, updates and continuous improvements to keep your site on top.",

    "projects.eyebrow": "Portfolio",
    "projects.title": "Recent work",
    "projects.subtitle": "A selection of projects delivered with passion and performance.",
    "projects.featured": "Featured",
    "projects.view": "View project",

    "why.eyebrow": "Why Web Solutions",
    "why.title": "Local advantage, world-class quality",
    "why.w1.title": "Bilingual FR / EN",
    "why.w1.desc": "Fluent communication in French and English — your project, your language.",
    "why.w2.title": "Quebec market",
    "why.w2.desc": "We understand the needs of local businesses and the Quebec market.",
    "why.w3.title": "Technical performance",
    "why.w3.desc": "Clean code, high PageSpeed scores and modern architecture.",
    "why.w4.title": "Dedicated support",
    "why.w4.desc": "A long-term partner, not just a vendor.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's start your project",
    "contact.subtitle": "Tell us about your vision. We reply within 24 hours.",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.message": "Your project",
    "contact.send": "Send message",
    "contact.or": "or reach us directly",

    "footer.rights": "All rights reserved.",
    "footer.tagline": "High-performance websites for Quebec.",

    "wa.tooltip": "Chat on WhatsApp",
  },
};

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "fr";
  const langs = navigator.languages ?? [navigator.language];
  for (const l of langs) {
    if (l?.toLowerCase().startsWith("en")) return "en";
    if (l?.toLowerCase().startsWith("fr")) return "fr";
  }
  return "fr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    setLangState(stored === "en" || stored === "fr" ? stored : detectBrowserLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
