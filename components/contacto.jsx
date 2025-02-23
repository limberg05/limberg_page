import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import '@/styles.css';

import { Button } from './ui/button';

const Contacto = () => {
  return (
    <div className="flex justify-center mb-14">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px] text-white bg-black"
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
              <Button className="bg-black outline-none card" variant="outline">
                <a className="items-center" href="https://github.com/limberg05">
                  Git Hub
                </a>
              </Button>
              <Button className="bg-black outline-none card" variant="outline">
                <a
                  className="items-center"
                  href="https://www.linkedin.com/in/limberg-hernandez-del-rio-973453275/"
                >
                  Linkedin
                </a>
              </Button>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Contacto;
