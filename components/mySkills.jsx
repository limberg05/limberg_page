import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MySkills = () => {
  return (
    <div>
      <h1 className="flex text-3xl justify-center sm:justify-start font-semibold  m-10 lg:text-4xl">
        My Skills
      </h1>
      <p className="h-3px bg-gray-500 max-w-screen h-0.5 mb-11 m-10" />

      <div className="grid grid-cols-1 items-center sm:grid-cols-2 ">
        <div className="text-2xl flex flex-col items-center justify-center">
          <p className="p-8 lg:p-9 bg-blur text-justify">
            Una página web que te ayuda a encontrar las partes compatibles entre
            sí para armar tu propia PC, proporcionando resultados con enlaces
            directos a productos disponibles en Mercado Libre.
          </p>
          <Link href="https://www.pcfacil.shop/">
            <button className="bg-black text-white rounded-full w-32 h-9 mb-9">
              Proyecto
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            className="sm:h-1/2 sm:w-1/2 object-cover rounded-full md:h-max p-10 flex justify-center items-center"
            src="/pcFacil.jpg"
            alt=""
          />
        </div>
      </div>
      <p className="h-3px bg-gray-500 max-w-screen h-0.5 mb-11 m-10" />
      <div className="grid grid-cols-1 items-center sm:grid-cols-2 ">
        <div className="text-2xl flex flex-col items-center justify-center">
          <p className="p-8 lg:p-9 bg-blur text-justify">
            Una pagina web que te muestra sismos que ocurrieron en mexico asi
            como su magnitud, en esta pagina ayude a hacer el front end.
          </p>
          <Link href="https://github.com/SOSMex/earthquakesWeb">
            <button className="bg-black text-white rounded-full w-60 h-9 mb-9">
              Proyecto en Git Hub
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            className="sm:h-1/2 sm:w-1/2 object-cover rounded-full md:h-max p-10 flex justify-center items-center"
            src="/logo-sosmex.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default MySkills;
