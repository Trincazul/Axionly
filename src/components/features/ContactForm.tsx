import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Send, Mail, Phone, MapPin, Clock, Zap } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
      toast.success(t('contact.successTitle'), { description: t('contact.successDesc') });
    }, 1500);
  };

  const inputClass =
    'w-full rounded-xl border border-axionly-glass-border bg-axionly-elevated px-4 py-3.5 font-outfit text-sm text-axionly-text placeholder:text-axionly-text-muted outline-none transition-all duration-200 focus:border-axionly-cyan/40 focus:ring-1 focus:ring-axionly-cyan/20';

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-1/4 size-96 rounded-full bg-axionly-cyan/3 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="size-2 rounded-full bg-axionly-cyan" />
            <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
              {t('contact.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('contact.title')}{' '}
            <span className="text-axionly-cyan">{t('contact.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form — 7 cols */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 lg:col-span-7 lg:p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={t('contact.namePlaceholder')}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder={t('contact.emailPlaceholder')}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                  {t('contact.companyLabel')}
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder={t('contact.companyPlaceholder')}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                  {t('contact.budgetLabel')}
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t('contact.budgetPlaceholder')}</option>
                  <option value="50k">{t('contact.budget50')}</option>
                  <option value="100k">{t('contact.budget100')}</option>
                  <option value="250k">{t('contact.budget250')}</option>
                  <option value="250k+">{t('contact.budget250plus')}</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                {t('contact.serviceLabel')}
              </label>
              <select
                value={form.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className={inputClass}
              >
                <option value="">{t('contact.servicePlaceholder')}</option>
                <option value="custom">{t('services.customSoftware')}</option>
                <option value="web">{t('services.webApps')}</option>
                <option value="mobile">{t('services.mobile')}</option>
                <option value="cloud">{t('services.cloud')}</option>
                <option value="api">{t('services.api')}</option>
                <option value="ai">{t('services.ai')}</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="mb-2 block font-outfit text-sm font-medium text-axionly-text-secondary">
                {t('contact.messageLabel')}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-axionly-cyan px-8 py-4 font-sora text-base font-semibold text-axionly-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)] disabled:opacity-60"
            >
              {sending ? (
                t('contact.sending')
              ) : (
                <>
                  {t('contact.submit')}
                  <Send className="size-5" />
                </>
              )}
            </button>
          </motion.form>

          {/* Info — 5 cols */}
          <motion.div
            className="flex flex-col gap-5 lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-sora text-lg font-semibold text-axionly-text">
                {t('contact.infoTitle')}
              </h3>
              <p className="mt-2 font-outfit text-sm text-axionly-text-secondary">
                {t('contact.infoDesc')}
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { icon: Mail, label: t('contact.email') },
                  { icon: Phone, label: t('contact.phone') },
                  { icon: MapPin, label: t('contact.location') },
                  { icon: Clock, label: t('contact.hours') },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-axionly-cyan/10">
                      <Icon className="size-5 text-axionly-cyan" />
                    </div>
                    <span className="font-outfit text-sm text-axionly-text">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 rounded-2xl p-7">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-500/10">
                <Zap className="size-6 text-green-400" />
              </div>
              <div>
                <p className="font-outfit text-sm text-axionly-text-secondary">
                  {t('contact.responseTime')}
                </p>
                <p className="font-sora text-xl font-bold text-axionly-text">
                  {t('contact.responseValue')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
