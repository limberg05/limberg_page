import { Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, profile } from '@/lib/data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#inicio"
              className="flex items-center gap-2 font-mono text-base font-bold"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg
                           bg-gradient-to-br from-primary to-accent text-[13px]
                           font-black text-primary-foreground"
              >
                L
              </span>
              Limberg<span className="text-primary">.dev</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {profile.role} en {profile.location}. Siempre aprendiendo y
              construyendo cosas útiles.
            </p>

            <div className="mt-5 flex gap-3">
              {[
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Correo' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full
                             border border-border text-muted-foreground transition-colors
                             hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Descargar CV
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            &copy; {year} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Hecho con Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
