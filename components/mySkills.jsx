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
            pagina web que te da resultados de partes que son compatibles entre
            si para poder crear tu propia pc, con resultados de links que por el
            momento son de mercado libre
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
    </div>
  );
};
export default MySkills;
