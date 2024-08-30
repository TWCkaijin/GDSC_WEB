'use client';

import { ChevronDown, CreditCard, LogOut, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { first } from 'lodash';
import { cn } from '@/lib/utils';
import { AVATAR_FALLBACK } from '@/config/const';

export default function ProfileMenu({ className }: { className?: string }) {
  const session = useSession();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn('flex items-center space-x-2', className)}
      >
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={session?.data?.user?.image || ''}
            alt={session?.data?.user?.name || session?.data?.user?.email || ''}
          />
          <AvatarFallback>
            {first(session?.data?.user?.name) ||
              first(session?.data?.user?.email) ||
              AVATAR_FALLBACK}
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {session?.data?.user?.name || session?.data?.user?.email || ''}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e: any) => {
              e.preventDefault();
              router.push('/dashboard');
            }}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={(e: any) => {
            e.preventDefault();
            signOut();
            router.push('/login');
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
