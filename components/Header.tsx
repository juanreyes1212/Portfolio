'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle'; // Corrected casing for consistency

const NavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
  <Link
    href={href}
    className={cn(
      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
      active
        ? 'bg-accent text-accent-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    )}
  >
    {children}
  </Link>
); 

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src="/images/jdrey-logo.png" alt="Logo" width={32} height={32} className="rounded mr-3" />
                            <span className="text-xl font-bold tracking-tight text-foreground">Juan Reyes</span>
                        </Link>
                    </div>
                    <div className="hidden sm:flex items-last space-x-4">
                        <NavLink href="/professional-work" active={pathname.startsWith('/professional-work')}>Work</NavLink>
                        <NavLink href="/personal-projects" active={pathname.startsWith('/personal-projects')}>Projects</NavLink>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
}