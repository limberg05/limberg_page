import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import * as React from 'react';

import '@/styles.css';

import { Button } from './ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contacto = () => {
  return (
    <div className="grid items-center justify-center mb-14 grid-cols-1 sm:grid-cols-2">
      <div className="flex justify-center mx-20 sm:mx-1 mb-8 sm:mb-0">
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-lg rounded-lg border md:min-w-[450px] text-white bg-black"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">My Info</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="grid grid-rows-2 h-full items-center justify-center p-2 ">
              <span className="font-semibold">
                Email: Hernandezdelriojuan@gmail.com
              </span>
              <div className="flex justify-center space-x-4">
                <Button
                  className="bg-black outline-none card"
                  variant="outline"
                >
                  <a
                    className="items-center"
                    href="https://github.com/limberg05"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Hub
                  </a>
                </Button>
                <Button
                  className="bg-black outline-none card"
                  variant="outline"
                >
                  <a
                    className="items-center"
                    href="https://www.linkedin.com/in/limberg-hernandez-del-rio-973453275/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </Button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="flex justify-center mx-2">
        <Card className="w-[350px] bg-black text-white">
          <CardHeader>
            <CardTitle>Tu info</CardTitle>
            <CardDescription className="text-gray-300 font-semibold">
              pasame tu info, para contactarme contigo y volver realidad tu
              proyecto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Correo</Label>
                  <Input id="name" placeholder="Tu correo electronico" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Proposito</Label>
                  <Input id="name" placeholder="Explica tu proyect" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between text-black">
            <Button className="bg-white text-black">send</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contacto;
