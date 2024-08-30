import { AVATAR_FALLBACK } from '@/config/const';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function BlogCard() {
  return (
    <div className="border border-slate-200 rounded-lg p-4 w-full">
      <div className="flex items-center justify-between">
        <p className="text-slate-500 text-sm">May 23rd, 2024</p>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Avatar className="w-6 h-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{AVATAR_FALLBACK}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Author Name</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h1 className="text-xl text-blue-500 mb-2">Lorem Ipsum</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        accumsan nulla, a commodo urna. Suspendisse cursus nulla vitae eros
        eleifend, sit amet tincidunt nulla varius.
      </p>
      <Button className="w-full text-slate-500" variant="secondary">
        Read more
      </Button>
    </div>
  );
}
