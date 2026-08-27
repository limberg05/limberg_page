'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/lib/data';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  // Barra de progreso + fondo del navbar al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: marca el enlace de la sección visible
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Cierra el menú con Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2
                   focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-3">
          <a
            href="#inicio"
            className="group flex items-center gap-2 font-mono text-sm font-bold tracking-tight sm:text-base"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md
                         bg-primary text-[13px] font-bold text-primary-foreground"
            >
              L
            </span>
            <span>Limberg</span>
            <span className="text-primary">.dev</span>
          </a>

          {/* Navegación escritorio */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full
                         border border-border bg-secondary/60 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Progreso de lectura */}
        <div
          className="h-0.5 origin-left bg-primary transition-transform duration-150"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </header>

      {/* Menú móvil */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-40 flex h-[100dvh] w-[78%] max-w-xs flex-col
                    border-l border-border bg-card px-6 pb-8 pt-24
                    transition-transform duration-300 ease-out lg:hidden ${
                      open ? 'translate-x-0' : 'translate-x-full'
                    }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium
                            transition-colors ${
                              active === link.href
                                ? 'bg-secondary text-primary'
                                : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                            }`}
              >
                <span className="font-mono text-xs text-primary/70">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-6 text-xs text-muted-foreground">
          {profile.location}
        </p>
      </aside>
    </>
  );
};

export default Navbar;
