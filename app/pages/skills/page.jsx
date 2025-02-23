'use client';
import { Navbar, Footer, MySkills, NavbarDropDown } from '@/components/index';

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">
      <Navbar />
      <NavbarDropDown />
      <MySkills />
      <Footer />
    </div>
  );
}
