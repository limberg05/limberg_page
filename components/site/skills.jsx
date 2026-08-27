import {
  Cloud,
  Database,
  LayoutGrid,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import { skillGroups } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const ICONS = {
  layout: LayoutGrid,
  terminal: Terminal,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  sparkles: Sparkles,
};

const Skills = () => {
  return (
    <section id="habilidades" className="section-pad bg-surface-2/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="04 — Stack"
          title="Habilidades técnicas"
          description="Tecnologías que uso a diario y herramientas con las que he trabajado en proyectos reales y académicos."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Sparkles;

            return (
              <Reveal key={group.title} delay={i * 70} className="h-full">
                <article className="card-surface card-hover h-full p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl
                                 bg-secondary text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold sm:text-lg">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
