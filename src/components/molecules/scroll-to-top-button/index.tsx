'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import cn from '@/utils/cn';

const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        window.scrollY > 0 ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={handleScrollToTop}
            className={cn(
                'group',
                'fixed bottom-12 right-12',
                'h-12 w-12 rounded-full',
                'bg-white text-slate-800',
                'flex items-center justify-center',
                'shadow-sm dark:shadow-slate-400',
                'transition-[opacity] duration-200',
                isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
        >
            <FaArrowUp className="transition-transform duration-300 group-hover:scale-150" />
        </button>
    );
};

export default ScrollToTopButton;
