const Footer = () => {
  return (
    <div className="bg-black h-52 text-white">
      <div className=" grid grid-cols-2 py-14 text-2xl ">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="/about" class="text-white">
            Acerca de
          </a>
          <a href="/contact" class="text-white">
            Contáctanos
          </a>
          <a href="/terms-of-service" class="text-white">
            Términos
          </a>
          <a href="/privacy-policy" class="text-white">
            Privacidad
          </a>
        </div>
        <div>
          &copy; 2025 Juan Limberg Hernandez del Rio. Todos los derechos
          reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;
