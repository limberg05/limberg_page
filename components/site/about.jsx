import {
  GraduationCap,
  Languages,
  Rocket,
  Accessibility,
  Gauge,
  Users,
} from 'lucide-react';
import { education, languages, profile } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const VALUES = [
  {
    icon: Gauge,
    title: 'Rendimiento primero',
    text: 'Optimicé el sitio del Tren Maya mejorando de forma notable sus métricas de Lighthouse.',
  },
  {
    icon: Accessibility,
    title: 'Accesibilidad real',
    text: 'Desarrollé Beyond, una app de texto a Braille pensada para personas con discapacidad visual.',
  },
  {
    icon: Rocket,
    title: 'De legacy a moderno',
    text: 'Migré una base de código PHP a una arquitectura Next.js + TypeScript en producción.',
  },
  {
    icon: Users,
    title: 'Trabajo en equipo',
    text: 'Experiencia remota y presencial con equipos institucionales y documentación técnica formal.',
  },
];

const About = () => {
  return (
    <section id="sobre-mi" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="01 — Sobre mí"
          title="Ingeniero enfocado en producto y detalle"
          description={`${profile.degree} (${profile.degreeNote}). Me interesa el desarrollo de software, el aprendizaje continuo y los proyectos con impacto real.`}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Valores */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="card-surface card-hover h-full p-5 sm:p-6">
                  <div
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl
                               bg-secondary text-primary"
                  >
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold sm:text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Educación + idiomas */}
          <div className="flex flex-col gap-6">
            <Reveal delay={120}>
              <article className="card-surface h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold sm:text-lg">Educación</h3>
                </div>

                <p className="mt-4 font-semibold">{education.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.degree}
                </p>
                <p className="mt-2 font-mono text-xs text-primary">
                  {education.period} · {education.location}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {education.courses.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article className="card-surface p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold sm:text-lg">Idiomas</h3>
                </div>

                <div className="mt-4 space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="mb-1.5 flex items-baseline justify-between text-sm">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary/80"
                          style={{ width: `${lang.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
