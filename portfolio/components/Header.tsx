import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ currentRoute, isDarkMode, toggleTheme }) => (
            <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Juan Reyes
                            </a>
                        </div>
                        <div className="hidden sm:flex items-center space-x-4">
                            <NavLink href="#/" active={currentRoute === 'home'}>Home</NavLink>
                            <NavLink href="#/professional-work" active={currentRoute.startsWith('professional')}>Professional Work</NavLink>
                            <NavLink href="#/digital-garden" active={currentRoute === 'garden'}>Digital Garden</NavLink>
                            <NavLink href="#/contact" active={currentRoute === 'contact'}>Contact Me</NavLink>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 focus:ring-blue-500 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-gray-700"
                            aria-label="Toggle color theme"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                </nav>
            </header>
        );

export default Header;