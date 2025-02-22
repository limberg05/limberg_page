'use client';
import { useEffect, useState } from 'react';
import {
  Contacto,
  Hero,
  Navbar,
  NavbarDropDown,
  Footer,
} from '@/components/index';

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [bgClass, setBgClass] = useState('');

  useEffect(() => {
    setIsClient(true);

    if (true) {
      setBgClass('bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100');
    }
  }, []);

  if (!isClient) {
    return null; // Muestra un mensaje de carga mientras se renderiza en el cliente
  }

  return (
    <div className={` ${bgClass}`}>
      <Navbar />
      <NavbarDropDown />
      <Hero />
      <Contacto />
      <Footer />
    </div>
  );
}
