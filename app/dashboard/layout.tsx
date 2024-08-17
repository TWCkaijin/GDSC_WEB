import NavBar from '@/components/nav-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
    </div>
  );
}
