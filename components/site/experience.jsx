'use client';

import { useState } from 'react';
import { Briefcase, ChevronDown, ExternalLink } from 'lucide-react';
import { experience } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const ExperienceItem = ({ job, index }) => {
  // El puesto más reciente arranca abierto; el resto se puede expandir.
  const [open, setOpen] = useState(index === 0);
  const panelId = `exp-panel-${index}`;

  return (
    <Reveal delay={index * 70} className="relative pl-10 sm:pl-14">
      {/* Punto de la línea de tiempo */}
      <span
        className={`absolute left-[11px] top-6 z-10 flex h-[18px] w-[18px] -translate-x-1/2
                    items-center justify-center rounded-full border-2 sm:left-[19px] ${
                      job.current
                        ? 'border-accent bg-accent/20'
                        : 'border-primary/60 bg-background'
                    }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            job.current ? 'bg-accent' : 'bg-primary/70'
          }`}
        />
      </span>

      <article className="card-surface card-hover mb-4 overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-primary">
                {job.period}
              </span>
              {job.current && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Reciente
                </span>
              )}
            </div>

            <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
              {job.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {job.company}
              {job.org && (
                <span className="hidden sm:inline"> · {job.org}</span>
              )}
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground/80">
              {job.mode}
            </p>
          </div>

          <ChevronDown
            className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
              open ? 'rotate-180 text-primary' : ''
            }`}
          />
        </button>

        <div
          id={panelId}
          className={`grid transition-all duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border/70 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <ul className="space-y-2.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Experience = () => {
  return (
    <section id="experiencia" className="section-pad bg-surface-2/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="02 — Trayectoria"
          title="Experiencia profesional"
          description="Del frontend de una app de sismos en tiempo real a la modernización del sitio oficial del Tren Maya. Toca cada puesto para ver el detalle."
        />

        <div className="relative mt-12">
          {/* Línea vertical */}
          <span
            className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b
                       from-primary/60 via-border to-transparent sm:left-[19px]"
            aria-hidden="true"
          />

          <div className="flex flex-col">
            {experience.map((job, i) => (
              <ExperienceItem key={job.company} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
