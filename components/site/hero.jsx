'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { profile, stats } from '@/lib/data';

const ROLES = [
  'Frontend Developer',
  'React & Next.js',
  'TypeScript',
  'Full Stack Jr.',
];

const TECHS = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Python',
  'Java',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Git',
  'BigQuery',
  'SQL Server',
  'Looker',
];

/** Efecto máquina de escribir para los roles del hero. */
const useTypewriter = (words, typing = 90, deleting = 45, pause = 1600) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!erasing && text === word) {
      const t = setTimeout(() => setErasing(true), pause);
      return () => clearTimeout(t);
    }

    if (erasing && text === '') {
      setErasing(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((cur) =>
          erasing ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
        ),
      erasing ? deleting : typing
    );
    return () => clearTimeout(t);
  }, [text, erasing, index, words, typing, deleting, pause]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-20"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="glow-blob animate-float-slow left-[-10%] top-[-10%] h-[26rem] w-[26rem]
                   bg-[hsl(var(--glow-a))]"
        aria-hidden="true"
      />
      <div
        className="glow-blob animate-float-slow bottom-[-15%] right-[-8%] h-[24rem] w-[24rem]
                   bg-[hsl(var(--glow-b))]"
        style={{ animationDelay: '-6s' }}
        aria-hidden="true"
      />

      <div className="container-page relative z-10 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Texto */}
          <div className="animate-fade-up text-center lg:text-left">
            {profile.available && (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-border
                           bg-secondary/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-success" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Disponible para nuevas oportunidades
              </span>
            )}

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Hola, soy{' '}
              <span className="text-accent-tone block sm:inline">Limberg</span>
            </h1>

            <p className="mt-4 min-h-[2.2em] font-mono text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              <span className="text-primary">&gt;</span> {typed}
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {profile.summary}
            </p>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </p>

            {/* Acciones */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-full
                           bg-primary px-6 py-3.5 text-sm font-semibold
                           text-primary-foreground transition-colors
                           hover:bg-primary/90 active:scale-[0.99]"
              >
                Ver mis proyectos
              </a>
            </div>

            {/* Redes */}
            <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
              {[
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                {
                  href: `mailto:${profile.email}`,
                  icon: Mail,
                  label: 'Correo',
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full
                             border border-border bg-card/60 text-muted-foreground
                             transition-all hover:-translate-y-0.5 hover:border-primary/50
                             hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="order-first flex justify-center lg:order-none">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full bg-primary opacity-[0.08] blur-2xl"
                aria-hidden="true"
              />
              <div
                className="relative h-52 w-52 overflow-hidden rounded-full border-2
                           border-border shadow-xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
              >
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
                  className="object-cover object-center"
                />
              </div>
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap
                           rounded-full border border-border bg-card px-4 py-1.5
                           font-mono text-xs font-semibold shadow-lg"
              >
                {profile.degreeShort} · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-surface card-hover px-4 py-5 text-center"
            >
              <p className="text-accent-tone text-3xl font-bold sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquesina de tecnologías */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-y border-border/60 bg-card/40 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...TECHS, ...TECHS].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap font-mono text-xs text-muted-foreground sm:text-sm"
            >
              <span className="mr-8 text-border">/</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-16 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce
                   text-muted-foreground transition-colors hover:text-primary lg:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
