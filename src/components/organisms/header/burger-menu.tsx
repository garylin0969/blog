'use client';

import { useState } from 'react';
import cn from '@/utils/cn';

const burgerCommonClasses = 'h-0.5 w-7 bg-black transition duration-300 dark:bg-white';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className={cn('space-y-1.5', 'flex flex-col items-center justify-center', 'h-7 w-7')}
                onClick={toggleMenu}
            >
                <span className={cn(burgerCommonClasses, isOpen && 'translate-y-2 rotate-45')} />
                <span className={cn(burgerCommonClasses, isOpen && 'opacity-0')} />
                <span className={cn(burgerCommonClasses, isOpen && '-translate-y-2 -rotate-45')} />
            </button>
            <div
                className={cn(
                    'fixed left-0 top-16',
                    'w-full p-2',
                    'bg-white shadow-lg',
                    'transition-transform duration-500 ease-in-out',
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
                )}
            >
                Gary
            </div>
        </>
    );
};

export default BurgerMenu;
