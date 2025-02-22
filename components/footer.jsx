const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sección de enlaces */}
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 mb-6 md:mb-0 text-center">
            <a href="/about" className="hover:underline">
              Acerca de
            </a>
            <a href="/contact" className="hover:underline">
              Contáctanos
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Términos
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacidad
            </a>
          </div>

          <div className="text-center md:text-left flex justify-center items-center">
            <p>
              &copy; 2025 Juan Limberg Hernandez del Rio. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
