import { motion } from "framer-motion";
import { Rocket, Search, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const items = [
    { icon: Rocket, key: "s1" },
    { icon: Search, key: "s2" },
    { icon: Wrench, key: "s3" },
  ];

  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-gold"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-gold opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-light text-gold shadow-elegant">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    {t(`services.${item.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`services.${item.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
