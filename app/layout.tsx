import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Winning Wings - Sports Events for All Ages',
  description: 'Empowering young athletes through organized sports events. Join cricket, football, badminton, and more competitions. Fuel the Game. Feel the Win.',
  keywords: 'sports events, youth sports, cricket, football, badminton, sports organization, winning wings',
  authors: [{ name: 'Winning Wings' }],
  openGraph: {
    title: 'Winning Wings - Sports Events for All Ages',
    description: 'Empowering young athletes through organized sports events. Fuel the Game. Feel the Win.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}