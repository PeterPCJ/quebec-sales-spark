import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const PHONE = "14389933962";

export function WhatsAppFab() {
  const { t, lang } = useI18n();
  const msg = encodeURIComponent(
    lang === "fr"
      ? "Bonjour ! J'aimerais en savoir plus sur vos services."
      : "Hi! I'd like to learn more about your services."
  );
  return (
    <motion.a
      href={`https://wa.me/${PHONE}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
      aria-label={t("wa.tooltip")}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative h-6 w-6 fill-current" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-elegant transition-opacity group-hover:opacity-100">
        {t("wa.tooltip")}
      </span>
    </motion.a>
  );
}
