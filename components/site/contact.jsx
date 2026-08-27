'use client';

import { useState } from 'react';
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { profile } from '@/lib/data';
import SectionHeading from './section-heading';
import Reveal from './reveal';

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  // Sitio 100% frontend: abrimos el cliente de correo con el mensaje ya redactado.
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contacto desde el portafolio — ${form.nombre || 'Nuevo mensaje'}`;
    const body = [
      `Nombre: ${form.nombre}`,
      `Correo: ${form.correo}`,
      '',
      form.mensaje,
    ].join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      /* el navegador bloqueó el portapapeles; el correo sigue visible */
    }
  };

  const CONTACT_ITEMS = [
    {
      icon: Mail,
      label: 'Correo',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    { icon: MapPin, label: 'Ubicación', value: profile.location, href: null },
  ];

  return (
    <section id="contacto" className="section-pad relative overflow-hidden bg-surface-2/40">
      <div
        className="glow-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-[hsl(var(--glow-a))]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="06 — Contacto"
          title="¿Trabajamos juntos?"
          description="Estoy abierto a oportunidades como desarrollador frontend o full stack, prácticas profesionales y proyectos freelance."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Datos de contacto */}
          <Reveal className="flex flex-col gap-4">
            <div className="card-surface p-6">
              <h3 className="text-lg font-bold">Mis datos</h3>

              <ul className="mt-5 space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center
                                 rounded-lg bg-secondary text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block break-all text-sm font-medium hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={copyEmail}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl
                           border border-border bg-secondary/60 px-4 py-3 text-sm font-semibold
                           transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-success" />
                    ¡Correo copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar correo
                  </>
                )}
              </button>
            </div>

            <div className="card-surface flex gap-3 p-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border
                           bg-secondary/40 py-4 text-sm font-semibold transition-all
                           hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border
                           bg-secondary/40 py-4 text-sm font-semibold transition-all
                           hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card-surface h-full p-6 sm:p-8">
              <h3 className="text-lg font-bold">Envíame un mensaje</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Se abrirá tu app de correo con el mensaje ya redactado.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.nombre}
                    onChange={update('nombre')}
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base
                               outline-none transition-colors placeholder:text-muted-foreground/70
                               focus:border-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    value={form.correo}
                    onChange={update('correo')}
                    placeholder="tu@correo.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base
                               outline-none transition-colors placeholder:text-muted-foreground/70
                               focus:border-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={update('mensaje')}
                    placeholder="Cuéntame sobre tu proyecto o vacante..."
                    className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3
                               text-base outline-none transition-colors
                               placeholder:text-muted-foreground/70 focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl
                           bg-primary px-6 py-3.5 text-sm font-semibold
                           text-primary-foreground transition-colors
                           hover:bg-primary/90 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" />
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
