import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Skills = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 m-5 gap-14 ">
        <Card className=" bg-black text-white flex-col flex justify-between ">
          <CardHeader>
            <CardTitle>
              Databases and SQL for Data Science with Python
            </CardTitle>
            <CardDescription className="text-justify">
              Curso que enseña cómo usar SQL y Python para gestionar y consultar
              bases de datos en ciencia de datos.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <img
              src="/certificado_curso1.jpg"
              alt=""
              className="lg:h-full lg:w-full img-fluid"
            />
          </CardFooter>
        </Card>
        <Card className=" bg-black text-white">
          <CardHeader>
            <CardTitle>
              Sistemas operativos y tú: Convertirse en un usuario avanzado
              Google
            </CardTitle>
            <CardDescription className="text-justify">
              Este curso te enseña a convertirte en un usuario avanzado de
              sistemas operativos, cubriendo conceptos clave y herramientas para
              mejorar tu eficiencia en el uso de computadoras y sistemas.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <img
              src="/certificado_curso2.jpg"
              alt=""
              className="lg:h-full lg:w-full img-fluid"
            />
          </CardFooter>
        </Card>

        <Card className=" bg-black text-white flex justify-between flex-col">
          <CardHeader>
            <CardTitle>CCNAv7: Introduction to Networks</CardTitle>
            <CardDescription className="text-justify">
              Curso que introduce los fundamentos de redes, enseñando cómo
              funcionan las conexiones, dispositivos y protocolos que permiten
              la comunicación en redes de computadoras.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <img
              src="/certificado_curso3.jpg"
              alt=""
              className="lg:h-full lg:w-full img-fluid"
            />
          </CardFooter>
        </Card>

        <Card className=" bg-black text-white flex justify-between flex-col">
          <CardHeader>
            <CardTitle>Introduction to NoSQL Databases</CardTitle>
            <CardDescription className="text-justify">
              Curso que cubre los fundamentos de las bases de datos NoSQL,
              incluyendo su estructura, uso y ventajas frente a las bases de
              datos tradicionales.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <img
              src="/certificado_curso4.jpg"
              alt=""
              className="lg:h-full lg:w-full img-fluid"
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Skills;
