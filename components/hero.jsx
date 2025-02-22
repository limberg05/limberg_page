export function Hero() {
  return (
    <body>
      <h1 className="text-3xl font-semibold flex m-7 lg:text-4xl">
        Explora Mi Trabajo
      </h1>
      <p className="h-3px bg-gray-500 max-w-screen h-0.5 mb-11" />

      <div className="grid grid-cols-1 items-center bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 to sm:grid-cols-2 ">
        <div className="p-25 text-2xl flex flex-col items-center justify-center">
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-80 lg:h-20 text-4xl">
            Meticuloso
          </p>
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-64 lg:h-20 text-4xl">
            Adaptable
          </p>
          <p className="flex font-semibold items-center justify-center bg-black text-white rounded-2xl m-4 h-14 p-4 w-72 lg:h-20 text-4xl">
            Eficiente
          </p>
        </div>
        <div className="">
          <img
            className="h-full w-full object-cover rounded-full md:h-max w-max p-10"
            src="/fotoLimberg.jpeg"
            alt=""
          />
        </div>
      </div>
    </body>
  );
}
