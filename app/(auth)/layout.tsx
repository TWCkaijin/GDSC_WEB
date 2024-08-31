import Globe from '@/components/magicui/globe';
import Image from 'next/image';
import { Handjet } from 'next/font/google';
import { cn } from '@/lib/utils';
import NumberTicker from '@/components/magicui/number-ticker';
import { GraduationCap, Users } from 'lucide-react';

const handjet = Handjet({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative min-h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="lg:p-8 min-h-screen flex flex-col justify-center relative">
        <div className="lg:flex hidden items-center text-lg font-medium p-6 absolute top-2 left-0">
          <Image
            src={'/logo.svg'}
            width={70}
            height={70}
            alt="GDSC-NSYSU-logo"
            className="mr-4"
          />
          <h2 className={cn(handjet.className, 'text-xl ')}>GDSC x NSYSU</h2>
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
      <div className="min-h-[100vh] lg:flex flex-col justify-between hidden p-4">
        <div className="bg-gradient-to-r from-[#ad5389] to-[#3c1053] flex-1 text-white lg:flex flex-col justify-center hidden rounded-xl">
          <div className="relative flex h-full flex-1 w-full items-center justify-center overflow-hidden rounded-lg px-40">
            <Globe />
          </div>
          <div className="mx-4 grid grid-cols-2 gap-4 my-4">
            <span className="rounded-lg p-4 border-white border bg-white backdrop-filter backdrop-blur-md bg-opacity-20 firefox:bg-opacity-90">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <NumberTicker
                  value={79}
                  className="text-white font-bold text-2xl"
                />
              </div>
              <div>Members joined</div>
            </span>
            <span className="rounded-lg p-4 border-white border bg-white backdrop-filter backdrop-blur-md bg-opacity-20 firefox:bg-opacity-90">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5" />
                <NumberTicker
                  value={100}
                  className="text-white font-bold text-2xl"
                />
              </div>
              <div>Courses added</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
