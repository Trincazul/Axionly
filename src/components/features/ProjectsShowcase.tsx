import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { projects } from '@/constants/mockData';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['all', 'web', 'mobile', 'cloud', 'ai'];

export default function ProjectsShowcase({ showAll = false }: { showAll?: boolean }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-axionly-base/30 py-24 lg:py-32">
      <div className="absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-axionly-teal/3 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="size-2 rounded-full bg-axionly-cyan" />
            <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
              {t('portfolio.badge')}
            </span>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
                {t('portfolio.title')}{' '}
                <span className="text-axionly-cyan">{t('portfolio.titleAccent')}</span>
              </h2>
              <p className="mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
                {t('portfolio.subtitle')}
              </p>
            </div>

            {/* Filters */}
            {showAll && (
              <div className="glass-card flex gap-1 rounded-xl p-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`rounded-lg px-4 py-2 font-outfit text-sm font-medium transition-all duration-200 ${
                      activeFilter === cat
                        ? 'bg-axionly-cyan/15 text-axionly-cyan'
                        : 'text-axionly-text-secondary hover:text-axionly-text'
                    }`}
                  >
                    {t(`portfolio.${cat}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card-hover group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-axionly-deep via-axionly-deep/40 to-transparent" />
                <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-axionly-glass opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-5 text-axionly-cyan" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sora text-lg font-semibold text-axionly-text">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-2 line-clamp-2 font-outfit text-sm leading-relaxed text-axionly-text-secondary">
                  {t(project.descKey)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-axionly-surface/80 px-2.5 py-1 font-outfit text-xs font-medium text-axionly-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        {!showAll && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 rounded-xl border border-axionly-glass-border bg-axionly-glass px-6 py-3 font-sora text-sm font-medium text-axionly-text transition-all duration-200 hover:border-axionly-cyan/30 hover:text-axionly-cyan"
            >
              {t('portfolio.badge')}
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
