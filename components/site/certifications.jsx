'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Award, Maximize2, X } from 'lucide-react';
import { certifications } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const Certifications = () => {
  const [active, setActive] = useState(null);

  // Cierra el visor con Escape y bloquea el scroll de fondo
  useEffect(() => {
    if (!active) return;

    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="certificaciones" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="05 — Formación continua"
          title="Certificaciones"
          description="Google Cloud, IBM, SAP, Cisco y UC San Diego. Toca las que tienen imagen para verlas en grande."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const clickable = Boolean(cert.image);

            return (
              <Reveal key={cert.title} delay={i * 50} className="h-full">
                <article
                  onClick={() => clickable && setActive(cert)}
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      setActive(cert);
                    }
                  }}
                  className={`card-surface card-hover group flex h-full flex-col overflow-hidden ${
                    clickable ? 'cursor-pointer' : ''
                  }`}
                >
                  {clickable && (
                    <div className="relative h-36 overflow-hidden bg-secondary/50 sm:h-40">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center bg-background/60
                                   opacity-0 backdrop-blur-[2px] transition-opacity duration-300
                                   group-hover:opacity-100"
                      >
                        <Maximize2 className="h-6 w-6 text-primary" />
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-sm font-bold leading-snug sm:text-base">
                      {cert.title}
                    </h3>
                    <p className="mt-auto pt-3 font-mono text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Visor de certificado */}
      {active && (
        <div
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center
                       rounded-full border border-border bg-card text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88dvh] w-full max-w-3xl overflow-auto rounded-2xl border border-border bg-card p-3"
          >
            <Image
              src={active.image}
              alt={active.title}
              width={1400}
              height={1000}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="px-2 py-3 text-center text-sm">
              <span className="font-semibold">{active.title}</span>
              <span className="block font-mono text-xs text-muted-foreground">
                {active.issuer} · {active.date}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Certifications;
