import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";

import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Solutions — Agence Web Premium au Québec" },
      {
        name: "description",
        content:
          "Agence web bilingue à Québec. Sites ultra-rapides, SEO local et landing pages haute conversion pour entreprises ambitieuses.",
      },
      { property: "og:title", content: "Web Solutions — Agence Web Premium au Québec" },
      {
        property: "og:description",
        content: "Sites web haute performance, bilingues FR/EN, conçus pour le marché du Québec.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          
          <Services />
          <Projects />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </I18nProvider>
  );
}
