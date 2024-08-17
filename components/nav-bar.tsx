import Menu from './menu';
import Image from 'next/image';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function NavBar() {
  return (
    <nav>
      <div className="flex h-16 justify-between items-center px-4 border-b">
        <div className="flex space-x-8">
          <Image
            src={'/logo.svg'}
            width={70}
            height={70}
            alt="GDSC-NSYSU-logo"
          />
          <Menu />
        </div>
        <div className="flex space-x-6">
          <Input placeholder="Search..." />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
