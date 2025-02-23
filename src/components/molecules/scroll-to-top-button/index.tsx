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
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={handleScrollToTop}
            className={cn(
                'z-10',
                'fixed bottom-6 right-6 md:bottom-12 md:right-12',
                'h-10 w-10 rounded-full md:h-12 md:w-12',
                'bg-white text-slate-800',
                'flex items-center justify-center',
                'shadow-sm dark:shadow-slate-400',
                'transition-[opacity] duration-200',
                isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
