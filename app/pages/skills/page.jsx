'use client';
import { Navbar, Footer, NavbarDropDown, Skills } from '@/components/index';

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">
      <Navbar />
      <NavbarDropDown />
      <Skills />
      <Footer />
    </div>
  );
}
