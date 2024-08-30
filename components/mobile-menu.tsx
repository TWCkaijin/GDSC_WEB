'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { useState } from 'react';
import { Handjet } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { menu, accountMenu } from '@/config/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Separator } from './ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { signOut, useSession } from 'next-auth/react';

const handjet = Handjet({ subsets: ['latin'] });

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const session = useSession();
  const router = useRouter();

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="w-10 h-10 p-2 flex lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full min-h-screen p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src={'/logo.svg'}
                width={70}
                height={70}
                alt="GDSC-NSYSU-logo"
                className="mr-4"
              />
              <h2 className={cn(handjet.className, 'text-2xl')}>
                GDSC x NSYSU
              </h2>
            </div>
            <Button
              variant="secondary"
              className="w-10 h-10 p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </Button>
          </div>
          <Separator />
          <ul className="flex flex-col space-y-2 mt-4">
            {menu.map((item, i) => {
              return (
                <li key={i}>
                  <Button variant="link" asChild>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.link}
                      className={cn(
                        'font-bold uppercase text-xl',
                        pathName == item.link ? 'text-black' : 'text-slate-400'
                      )}
                    >
                      {item.title}
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
          <Separator className="my-4" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="account" className="border-none">
              <AccordionTrigger className="bg-slate-100 px-4 rounded-md">
                {session?.data?.user?.name || session?.data?.user?.email || ''}
              </AccordionTrigger>
              <AccordionContent className="mt-4">
                <ul className="flex flex-col space-y-2 mt-4">
                  {accountMenu.map((item, i) => {
                    return (
                      <li key={i}>
                        <Button variant="link" asChild>
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={item.link}
                            className={cn(
                              'font-bold uppercase text-xl',
                              pathName == item.link
                                ? 'text-black'
                                : 'text-slate-400'
                            )}
                          >
                            {item.title}
                          </Link>
                        </Button>
                      </li>
                    );
                  })}
                  <li>
                    <Button
                      variant="link"
                      className="text-xl text-slate-400"
                      onClick={(e: any) => {
                        setIsOpen(false);
                        e.preventDefault();
                        signOut();
                        router.push('/login');
                      }}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
