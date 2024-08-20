import NavBar from '@/components/nav-bar';
import authOptions from '@/config/auth.config';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div>
      <NavBar />
      <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
    </div>
  );
}
