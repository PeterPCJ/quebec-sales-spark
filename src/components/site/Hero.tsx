import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            {t("hero.eyebrow")}
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("hero.title1")}{" "}
            <span className="text-white">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" asChild>
              <a href="#contact">
                {t("hero.cta")} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineGold" size="lg" asChild>
              <a href="#projects">{t("hero.cta2")}</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div>
              <div className="text-2xl font-bold text-gold">100%</div>
              <div className="text-xs uppercase tracking-wider">Sur mesure</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-gold">FR/EN</div>
              <div className="text-xs uppercase tracking-wider">Bilingue</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-gold">24h</div>
              <div className="text-xs uppercase tracking-wider">Réponse</div>
            </div>
          </div>
        </div>

        {/* Visual: floating dashboard mockup */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-navy-light/40 p-6 shadow-elegant backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />
                <div className="ml-3 text-xs text-white/40">websolutions.ca</div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/10" />
                <div className="h-3 w-2/3 rounded bg-white/10" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[94, 100, 98].map((n, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-gold/30 bg-gold/10 p-3 text-center"
                    >
                      <div className="text-2xl font-bold text-gold">{n}</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/60">
                        {["Perf", "A11y", "SEO"][i]}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-20 rounded-lg bg-gradient-to-br from-gold/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
