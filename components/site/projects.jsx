'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { projects } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const FILTERS = ['Todos', 'Next.js', 'React', 'TypeScript', 'Accesibilidad'];

const ACCENTS = {
  emerald: 'from-emerald-500/20 to-teal-500/10 text-emerald-500',
  indigo: 'from-indigo-500/20 to-blue-500/10 text-indigo-500',
  amber: 'from-amber-500/20 to-orange-500/10 text-amber-500',
  violet: 'from-violet-500/20 to-fuchsia-500/10 text-violet-500',
  cyan: 'from-cyan-500/20 to-sky-500/10 text-cyan-500',
  rose: 'from-rose-500/20 to-pink-500/10 text-rose-500',
};

const ProjectCard = ({ project, index }) => {
  const accent = ACCENTS[project.accent] ?? ACCENTS.indigo;

  return (
    <Reveal delay={index * 70} className="h-full">
      <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
        {/* Cabecera visual */}
        <div
          className={`relative flex h-40 items-center justify-center overflow-hidden
                      bg-gradient-to-br sm:h-44 ${accent}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="text-5xl transition-transform duration-500 group-hover:scale-110">
              {project.emoji}
            </span>
          )}

          {project.featured && (
            <span
              className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-1
                         text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur"
            >
              Destacado
            </span>
          )}
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
          <p className="mt-1 font-mono text-xs text-primary">
            {project.subtitle}
          </p>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border/70 pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Ver sitio
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                Código
              </a>
            )}
            {!project.live && !project.repo && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" />
                Proyecto privado
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('Todos');

  const visible = useMemo(() => {
    if (filter === 'Todos') return projects;
    return projects.filter((p) =>
      p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  return (
    <section id="proyectos" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="03 — Portafolio"
          title="Proyectos en los que he trabajado"
          description="Sitios en producción, herramientas internas y aplicaciones de accesibilidad. Filtra por tecnología para ver lo que te interesa."
        />

        {/* Filtros (scroll horizontal en móvil) */}
        <Reveal delay={80}>
          <div className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No hay proyectos con ese filtro todavía.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
