
import React from 'react';

const NavLink = ({ href, active, children }) => (
            <a href={href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                {children}
            </a>
        );
        
export default NavLink;