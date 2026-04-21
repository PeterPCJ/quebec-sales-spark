import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "jppetertosh@gmail.com";
const PHONE = "+14389933962";

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Web Solutions — ${form.name}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nCourriel: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl bg-gradient-hero p-8 text-white shadow-elegant">
              <h3 className="text-xl font-bold">Web Solutions</h3>
              <p className="mt-2 text-sm text-white/70">{t("footer.tagline")}</p>

              <div className="mt-8 space-y-4">
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-sm text-white/80 hover:text-gold">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="break-all">{EMAIL}</span>
                </a>
                <a href={`tel:${PHONE}`} className="flex items-start gap-3 text-sm text-white/80 hover:text-gold">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>+1 (438) 993-3962</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>Québec, Canada</span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-xs uppercase tracking-widest text-white/50">Social</div>
                <div className="mt-3 flex gap-3">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                  ].map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={i}
                        href={s.href}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                        aria-label="Social"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card lg:col-span-3"
          >
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy">
                {t("contact.name")}
              </label>
              <Input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-11"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy">
                {t("contact.email")}
              </label>
              <Input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-11"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy">
                {t("contact.message")}
              </label>
              <Textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button variant="gold" size="lg" type="submit" className="w-full">
              <Send className="h-4 w-4" />
              {t("contact.send")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
