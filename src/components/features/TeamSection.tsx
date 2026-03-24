import { useTranslation } from '@/hooks/useTranslation';
import { teamMembers } from '@/constants/mockData';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-axionly-base/30 py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
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
              {t('team.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('team.title')}{' '}
            <span className="text-axionly-cyan">{t('team.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="glass-card-hover group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-axionly-deep via-axionly-deep/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-sora text-base font-semibold text-axionly-text">{member.name}</h3>
                <p className="mt-1 font-outfit text-sm text-axionly-cyan">{t(member.roleKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
