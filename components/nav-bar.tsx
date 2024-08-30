import Menu from './menu';
import Image from 'next/image';
import ProfileMenu from './profile-menu';
import { cn } from '@/lib/utils';
import { Handjet } from 'next/font/google';
import MobileMenu from './mobile-menu';

const handjet = Handjet({ subsets: ['latin'] });

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-md bg-opacity-20 border-b-[0.2px] border-gray-100 firefox:bg-opacity-90">
      <div className="flex h-16 justify-between items-center px-8 border-b">
        <div className="flex items-center">
          <Image
            src={'/logo.svg'}
            width={50}
            height={70}
            alt="GDSC-NSYSU-logo"
            className="mr-4"
          />
          <h2 className={cn(handjet.className, 'mr-6 text-3xl')}>
            GDSC x NSYSU
          </h2>
        </div>
        <div className="flex space-x-6">
          <MobileMenu />
          <Menu />
          <ProfileMenu className="lg:flex hidden" />
        </div>
      </div>
    </nav>
  );
}
