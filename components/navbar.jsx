import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <div className="hidden sm:flex bg-black items-center h-20 justify-between px-14 ">
      <p className="text-white ">Limberg.dev</p>
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="outline">Skills</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="outline">Experiencia</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="outline">Projects</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="outline">Contact</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="outline">Reach Out</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
