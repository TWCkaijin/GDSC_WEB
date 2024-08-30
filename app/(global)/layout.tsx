import NavBar from '@/components/nav-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="relative mx-auto max-w-screen-xl gap-x-6 px-4 py-10 md:flex md:flex-row md:py-10">
        {children}
      </main>
    </div>
  );
}
