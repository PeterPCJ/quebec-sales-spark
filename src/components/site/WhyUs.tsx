import { motion } from "framer-motion";
import { Globe2, MapPin, Gauge, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useI18n();
  const items = [
    { icon: Globe2, key: "w1" },
    { icon: MapPin, key: "w2" },
    { icon: Gauge, key: "w3" },
    { icon: HeartHandshake, key: "w4" },
  ];

  return (
    <section id="why" className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {t("why.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t("why.title")}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{t(`why.${item.key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t(`why.${item.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
