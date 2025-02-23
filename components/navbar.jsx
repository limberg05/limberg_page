import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="hidden sm:flex bg-black items-center h-14 justify-between px-14 ">
      <Link href="/">
        <p className="text-white m-4">Limberg.dev</p>
      </Link>
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/pages/proyects">
                <Button variant="secondary">Proyects</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pages/skills">
                <Button variant="secondary">Skills</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
