'use client';

import Link from 'next/link'; // Keep Link import
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon } from './Icons';

const NavLink = ({ href, active, children }) => (
    <Link href={href}>
        <span className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
            {children}
        </span>
    </Link>
);

export default function Header({ currentRoute, isDarkMode, toggleTheme }) {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Juan Reyes</span>
                        </Link>
                    </div>
                    <div className="hidden sm:flex items-center space-x-4">
                        <NavLink href="/" active={pathname === '/'}>Home</NavLink>
                        <NavLink href="/professional-work" active={pathname.startsWith('/professional-work')}>Professional Work</NavLink>
                    </div>
                    <button onClick={toggleTheme} className="p-2 rounded-full">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </nav>
        </header>
    );
}