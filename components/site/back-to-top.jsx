'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center
                  rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground
                  shadow-lg shadow-primary/30 transition-all duration-300 ${
                    show
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
