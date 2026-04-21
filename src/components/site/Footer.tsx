import logo from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-navy py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Web Solutions" className="h-8 w-8 rounded-full" />
          <div className="text-sm">
            <div className="font-bold text-white">Web Solutions</div>
            <div className="text-xs text-white/50">{t("footer.tagline")}</div>
          </div>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Web Solutions. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
