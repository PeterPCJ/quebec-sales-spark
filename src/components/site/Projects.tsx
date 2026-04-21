import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import b7 from "@/assets/project-b7burger.jpg";
import foodie from "@/assets/project-foodie.png";
import awax from "@/assets/project-awax.jpg";
import medi from "@/assets/project-medicenter.jpg";
import starbucks from "@/assets/project-starbucks.jpg";

const projects = [
  { id: "b7", title: "B7 Burger", category: "Restaurant", img: b7 },
  { id: "foodie", title: "Foodie", category: "Restaurant", img: foodie },
  { id: "awax", title: "Awax Studio", category: "Design", img: awax },
  { id: "medi", title: "Medicenter", category: "Santé", img: medi },
  { id: "star", title: "Coffee Shop", category: "Café", img: starbucks },
];

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            {t("projects.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-widest text-gold">{p.category}</div>
                <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
              </div>
              <div className="p-4 transition-opacity group-hover:opacity-0">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.category}
                </div>
                <h3 className="mt-1 text-base font-bold text-navy">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
