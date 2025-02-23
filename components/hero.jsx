const Hero = () => {
  return (
    <div>
      <h1 className="flex text-3xl justify-center sm:justify-start font-semibold  m-10 lg:text-4xl">
        Explora Mi Trabajo
      </h1>
      <p className="h-3px bg-gray-500 max-w-screen h-0.5 mb-11 m-10" />

      <div className="grid grid-cols-1 items-center sm:grid-cols-2 ">
        <div className="p-25 text-2xl flex flex-col items-center justify-center">
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-56 sm:w-80 lg:h-20 text-xl sm:text-4xl">
            Meticuloso
          </p>
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-56 sm:w-80 lg:h-20 text-xl sm:text-4xl">
            Adaptable
          </p>
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-56 sm:w-80 lg:h-20 text-xl sm:text-4xl">
            Eficiente
          </p>
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-56 sm:w-80 lg:h-20 text-xl sm:text-4xl">
            Limberg
          </p>
        </div>
        <div>
          <img
            className="h-full w-full object-cover rounded-full md:h-max p-10"
            src="/fotoLimberg.jpeg"
            alt=""
          />
        </div>
      </div>
      <p className="h-3px bg-gray-500 max-w-screen h-0.5 mb-11 m-10" />
    </div>
  );
};

export default Hero;
