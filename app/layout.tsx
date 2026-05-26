import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Boldog Bulldog — Kiskutya nevelési útitárs',
  description:
    'Prémium nevelési alkalmazás újdonsült bulldog-gazdiknak. Etetés, szobatisztaság, alvás, oltások és napi tippek — egy helyen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
