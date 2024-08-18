import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { getServerSession } from 'next-auth';
import AuthProvider from '@/providers/auth-provider';

const segoeUI = localFont({
  src: [
    {
      path: './fonts/segoe-ui/Segoe-UI.ttf',
      style: 'normal',
    },
    {
      path: './fonts/segoe-ui/Segoe-UI-Italic.ttf',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'GDSC x NSYSU',
  description: 'Google Developer Student Club',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <AuthProvider session={session}>
        <body className={segoeUI.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
