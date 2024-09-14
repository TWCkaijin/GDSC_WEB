'use client';

import { AVATAR_FALLBACK } from '@/config/const';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Blog } from '@/types/blog';
import { format } from 'date-fns';
import { imageBuilder } from '@/sanity/sanity-utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();

  return (
    <div className="border border-slate-200 rounded-lg p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-slate-500 text-sm">
          {format(new Date(blog?.publishedAt), 'MMM d, yyyy')}
        </p>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Avatar className="w-6 h-6">
                <AvatarImage
                  src={imageBuilder(blog?.author?.image)?.url()}
                  alt={blog?.author?.name}
                />
                <AvatarFallback>{AVATAR_FALLBACK}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{blog?.author?.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h1 className="text-xl text-blue-500 mb-2">
        <Link href={`/activities/${blog?.slug?.current}`}>{blog?.title}</Link>
      </h1>
      <p className="mb-4">{blog.metadata.slice(0, 140)}...</p>
      <Button
        className="w-full text-slate-500"
        variant="secondary"
        onClick={() => router.push(`/activities/${blog?.slug?.current}`)}
      >
        Read more
      </Button>
    </div>
  );
}
