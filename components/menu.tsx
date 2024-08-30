'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { menu } from '@/config/menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Menu() {
  const pathName = usePathname();

  return (
    <ul className="hidden lg:flex items-center space-x-4 lg:space-x-6 mx-4 text-sm">
      {menu.map((item, i) => {
        return (
          <li key={i}>
            <Button variant="link" asChild>
              <Link
                href={item.link}
                className={cn(
                  'font-bold uppercase',
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
  );
}
