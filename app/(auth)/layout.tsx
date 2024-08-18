import Globe from '@/components/magicui/globe';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative min-h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="inset-0 bg-zinc-900 min-h-[100vh] text-white lg:flex flex-col justify-between hidden">
        <div className="relative z-20 flex items-center text-lg font-medium p-6 ">
          <Image
            src={'/logo.svg'}
            width={100}
            height={100}
            alt="GDSC-NSYSU-logo"
            className="mr-4"
          />
          <h2 className="text-3xl font-bold tracking-tight">GDSC x NSYSU</h2>
        </div>
        <div className="relative flex h-full flex-1 w-full items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60">
          <Globe />
        </div>
        <div className="ml-auto mr-8 my-8 text-2xl font-bold tracking-tight">
          Anyone can code
        </div>
      </div>
      <div className="lg:p-8 min-h-[100vh] flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
}
