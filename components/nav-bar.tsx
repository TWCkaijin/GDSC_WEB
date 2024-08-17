import Menu from './menu';
import Image from 'next/image';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function NavBar() {
  return (
    <nav>
      <div className="flex h-16 justify-between items-center px-4 border-b">
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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
