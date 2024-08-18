import Menu from './menu';
import Image from 'next/image';
import { Input } from './ui/input';
import ProfileMenu from './profile-menu';

export default function NavBar() {
  return (
    <nav>
      <div className="flex h-16 justify-between items-center px-8 border-b">
        <div className="flex items-center">
          <Image
            src={'/logo.svg'}
            width={50}
            height={70}
            alt="GDSC-NSYSU-logo"
            className="mr-4"
          />
          <h2 className="font-bold tracking-tight mr-6">GDSC x NSYSU</h2>
          <Menu />
        </div>
        <div className="flex space-x-6">
          <Input placeholder="Search..." />
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
}
