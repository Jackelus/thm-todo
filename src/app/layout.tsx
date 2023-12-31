import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THM Task Manager',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <div className='m-4 text-center text-xl'>THM Task Manager</div>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
