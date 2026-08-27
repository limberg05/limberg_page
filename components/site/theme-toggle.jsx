'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      /* almacenamiento no disponible: el tema solo dura la sesión */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={dark ? 'Modo claro' : 'Modo oscuro'}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                  border border-border bg-secondary/60 text-foreground
                  transition-colors hover:border-primary/50 hover:text-primary ${className}`}
    >
      {mounted && dark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
};

export default ThemeToggle;
