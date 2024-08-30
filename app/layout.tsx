import type { Metadata } from 'next';
import './globals.css';
import { getServerSession } from 'next-auth';
import AuthProvider from '@/providers/auth-provider';

import { Nunito_Sans } from 'next/font/google';
import authOptions from '@/config/auth.config';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GDSC x NSYSU',
  description: 'Google Developer Student Club',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <AuthProvider session={session}>
        <body className={nunito.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
