'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navbarDropDown = () => {
  const params = usePathname();
  const [inicio, setInicio] = useState(false);
  const [skills, setSkills] = useState(false);
  const [proyects, setProyects] = useState(false);

  useEffect(() => {
    console.log(params);
    if (params === '/') setInicio(true);
    if (params === '/pages/proyects') setProyects(true);
    if (params === '/pages/skills') setSkills(true);
  }, []);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="sm:hidden font-bold bg-black text-white w-screen"
            variant="outline"
          >
            Limberg.dev
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/" className={inicio ? 'hidden' : ''}>
              <DropdownMenuItem>
                Inicio
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/pages/proyects" className={proyects ? 'hidden' : ''}>
              <DropdownMenuItem>
                Proyects
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/pages/skills" className={skills ? 'hidden' : ''}>
              <DropdownMenuItem>
                Skills
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default navbarDropDown;
