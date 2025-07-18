'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'jdreyes.dev | Juan Reyes',
//   description: 'Portfolio of Juan Reyes, a Front-End Developer and UX Designer.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header currentRoute="home" isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="text-center p-8 mt-16 text-slate-500 dark:text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Juan Reyes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}