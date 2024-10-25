'use client';

import { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'next-themes';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <>
            <Provider enableSystem={true} attribute="class">
                <div className="transition-colors duration-300 dark:bg-slate-800 dark:text-slate-400">{children}</div>
            </Provider>
        </>
    );
};

export default ThemeProvider;
