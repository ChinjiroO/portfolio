import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Techin Seoikrathok | Jr.Software Developer',
  description: 'Portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
