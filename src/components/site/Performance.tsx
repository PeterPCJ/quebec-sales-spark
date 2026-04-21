import { motion } from "framer-motion";
import { Gauge, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function CircularScore({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative h-44 w-44">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="10" fill="none" className="text-white/10" />
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke="url(#goldGrad)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8C76A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-extrabold text-gold">{score}</div>
        <div className="text-[10px] uppercase tracking-widest text-white/60">/ 100</div>
      </div>
    </div>
  );
}

export function Performance() {
  const { t } = useI18n();
  const metrics = [
    { key: "perf.metric1", value: 94 },
    { key: "perf.metric2", value: 100 },
    { key: "perf.metric3", value: 98 },
    { key: "perf.metric4", value: 100 },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold"
          >
            <Zap className="h-3.5 w-3.5" />
            {t("perf.eyebrow")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t("perf.title")}
          </motion.h2>
          <p className="mt-4 text-white/70">{t("perf.desc")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-navy-light/30 p-6 shadow-elegant backdrop-blur-xl md:p-10"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-gold" />
              <span className="font-semibold text-white">PageSpeed Insights</span>
            </div>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
              ● Live
            </span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="flex justify-center">
              <CircularScore score={94} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wider text-white/60">
                      {t(m.key)}
                    </span>
                    <span className="text-2xl font-bold text-gold">{m.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                      className="h-full bg-gradient-gold"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
