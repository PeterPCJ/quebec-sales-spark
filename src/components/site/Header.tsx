import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const links = [
  { id: "services", key: "nav.services" },
  { id: "projects", key: "nav.projects" },
  { id: "why", key: "nav.why" },
  { id: "contact", key: "nav.contact" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Web Solutions" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="text-base font-bold text-white md:text-lg">Web Solutions</div>
            <div className="text-[10px] uppercase tracking-widest text-gold">Web Agency</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">{t("nav.cta")}</a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-gold"
                >
                  {t(l.key)}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <Languages className="h-3.5 w-3.5" />
                  {lang === "fr" ? "English" : "Français"}
                </button>
                <Button variant="gold" size="sm" className="flex-1" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
