import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { ThemeProvider } from 'next-themes'; // Corrected import
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'jdreyes.dev | Juan Reyes',
  description: 'Portfolio of Juan Reyes, a Front-End Developer and UX Designer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="text-center p-8 mt-16 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Juan Reyes. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}