import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={segoeUI.className}>{children}</body>
    </html>
  );
}
