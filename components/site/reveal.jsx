'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Envoltura que revela su contenido cuando entra en el viewport.
 * Usa IntersectionObserver (sin librerías extra) y respeta prefers-reduced-motion
 * mediante los estilos de .reveal en globals.css.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // Se dispara un poco ANTES de que el elemento entre en pantalla,
      // para que ya esté visible cuando el usuario llegue a él.
      { threshold: 0, rootMargin: '0px 0px 20% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
