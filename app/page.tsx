import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Certifications,
  Contact,
  Footer,
  BackToTop,
} from '@/components/index';

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
